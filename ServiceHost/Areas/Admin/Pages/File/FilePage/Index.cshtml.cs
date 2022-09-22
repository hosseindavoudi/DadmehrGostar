using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Files.Application.Board;
using Files.Application.File;
using Files.Application.PenaltyTitle;
using Files.Application.Petition;
using Files.Application.ProceedingSession;
using Files.Application.WorkHistory;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ServiceHost.Areas.Admin.Pages.File.FilePage
{
    public class IndexModel : PageModel
    {
        public FileSearchModel searchModel;
        public List<FileViewModel> viewModels;

        private readonly IFileApplication _fileApplication;
        private readonly IBoardApplication _boardApplication;
        private readonly IPetitionApplication _petitionApplication;
        private readonly IWorkHistoryApplication _workHistoryApplication;
        private readonly IPenaltyTitleApplication _penaltyTitleApplication;
        private readonly IProceedingSessionApplication _proceedingSessionApplication;

        public IndexModel(IFileApplication fileApplication,
                          IBoardApplication boardApplication,
                          IPetitionApplication petitionApplication,
                          IWorkHistoryApplication workHistoryApplication,
                          IPenaltyTitleApplication penaltyTitleApplication,
                          IProceedingSessionApplication proceedingSessionApplication)
        {
            _fileApplication = fileApplication;
            _boardApplication = boardApplication;
            _petitionApplication = petitionApplication;
            _workHistoryApplication = workHistoryApplication;
            _penaltyTitleApplication = penaltyTitleApplication;
            _proceedingSessionApplication = proceedingSessionApplication;
        }

        public void OnGet(FileSearchModel searchModel)
        {
            viewModels = _fileApplication.Search(searchModel);
        }

        public IActionResult OnGetCreateFile()
        {
            searchModel = new FileSearchModel();
            var archiveNo = _fileApplication.GetLastArchiveNumber(searchModel) == null ? _fileApplication.GetLastArchiveNumber(searchModel).ArchiveNo : (long)1;

            var createFile = new CreateFile
            {
                ArchiveNo = archiveNo
            };

            return Partial("./CreateFile", createFile);
        }

        public IActionResult OnPostCreateFile(CreateFile command)
        {
            var result = _fileApplication.Create(command);

            return new JsonResult(result);
        }

        public IActionResult OnGetEditFile(long id = -1)
        {
            if (id == -1)
            {
                var file = _fileApplication.Search(new FileSearchModel()).FirstOrDefault();
                id = file.Id;
            }

            var editFile = _fileApplication.GetDetails(id);
            var diagnosisBoard = _boardApplication.GetDetails(editFile.Id, 1) ?? new EditBoard { File_Id = editFile.Id, BoardType_Id = 1 };
            var diagnosisPS = _proceedingSessionApplication.Search(diagnosisBoard.Id);
            diagnosisPS = diagnosisPS.Count != 0
                ? diagnosisPS
                : new List<EditProceedingSession> { new EditProceedingSession() };

            var diagnosisPetition = _petitionApplication.GetDetails(editFile.Id, 1);

            var disputeResolutionBoard = _boardApplication.GetDetails(editFile.Id, 2) ?? new EditBoard { File_Id = editFile.Id, BoardType_Id = 2 };
            var disputeResolutionPS = _proceedingSessionApplication.Search(disputeResolutionBoard.Id);
            disputeResolutionPS = disputeResolutionPS.Count != 0
               ? disputeResolutionPS
               : new List<EditProceedingSession> { new EditProceedingSession() };

            var disputeResolutionPetition = _petitionApplication.GetDetails(editFile.Id, 2);

            editFile.createDiagnosisBoard = diagnosisBoard;
            editFile.createDiagnosisPS = diagnosisPS;
            editFile.createDiagnosisPetition = diagnosisPetition;

            editFile.createDisputeResolutionBoard = disputeResolutionBoard;
            editFile.createDisputeResolutionPS = disputeResolutionPS;
            editFile.createDisputeResolutionPetition = disputeResolutionPetition;

            return Partial("Edit", editFile);
        }

        public IActionResult OnPostEditFile(EditFile command)
        {
            var result = _fileApplication.Edit(command);

            if (!result.IsSuccedded) return new JsonResult(result);


            if (command.createDiagnosisBoard.Id == 0)
            {
                result = _boardApplication.Create(command.createDiagnosisBoard);
            }
            else
            {
                result = _boardApplication.Edit(command.createDiagnosisBoard);
            }

            if (!result.IsSuccedded) return new JsonResult(result);

            result = _proceedingSessionApplication.CreateProceedingSessions(command.createDiagnosisPS, result.EntityId);

            if (!result.IsSuccedded) return new JsonResult(result);


            if (command.createDisputeResolutionBoard.Id == 0)
            {
                result = _boardApplication.Create(command.createDisputeResolutionBoard);
            }
            else
            {
                result = _boardApplication.Edit(command.createDisputeResolutionBoard);
            }

            if (!result.IsSuccedded) return new JsonResult(result);

            result = _proceedingSessionApplication.CreateProceedingSessions(command.createDisputeResolutionPS, result.EntityId);

            if (!result.IsSuccedded) return new JsonResult(result);


            return new JsonResult(result);
        }

        public IActionResult OnGetCreateOrEditPetition(long fileId, int boardTypeId)
        {
            var file = _fileApplication.GetDetails(fileId);
            var petition = _petitionApplication.GetDetails(fileId, boardTypeId) ?? new EditPetition();
            var workHistories = _workHistoryApplication.Search(petition.Id);
            workHistories = workHistories.Count != 0
                ? workHistories
                : new List<EditWorkHistory> { new EditWorkHistory() };

            var PenaltyTitles = _penaltyTitleApplication.Search(petition.Id);
            PenaltyTitles = PenaltyTitles.Count != 0
                ? PenaltyTitles
                : new List<EditPenaltyTitle> { new EditPenaltyTitle() };

            petition.File_Id = fileId;
            petition.BoardType_Id = boardTypeId;
            petition.FileData = file;
            petition.CreateWorkHistory = workHistories;
            petition.CreatePenaltyTitle = PenaltyTitles;

            return Partial("./CreateOrEditPetition", petition);
        }

        public IActionResult OnPostCreateOrEditPetition(EditPetition command)
        {

            //if (!ModelState.IsValid)
            //{
            //    return BadRequest();

            //}

            var result = _fileApplication.Edit(command.FileData);

            if (!result.IsSuccedded) return new JsonResult(result);


            if (command.Id == 0)
            {
                result = _petitionApplication.Create(command);
            }
            else
            {
                result = _petitionApplication.Edit(command);
            }

            if (!result.IsSuccedded) return new JsonResult(result);


            result = _workHistoryApplication.CreateWorkHistories(command.CreateWorkHistory, result.EntityId);

            if (!result.IsSuccedded) return new JsonResult(result);


            result = _penaltyTitleApplication.CreatePenaltyTitles(command.CreatePenaltyTitle, result.EntityId);

            if (!result.IsSuccedded) return new JsonResult(result);


            return new JsonResult(result);
        }



        public IActionResult OnGetDetails(long id)
        {
            var editJob = _fileApplication.GetDetails(id);

            return Partial("Details", editJob);
        }

        public JsonResult OnGetCheckUniqueArchiveNo(int id)
        {
            var sModel = new FileSearchModel { ArchiveNo = (long)id };
            var vModel = _fileApplication.Search(sModel);
            return new JsonResult(new { stat = vModel == null ? true : false, message = vModel == null ? "" : "شماره بایگانی تکراری است" });
        }

        private bool IsValid<T>(T inputModel)
        {
            var property = this.GetType().GetProperties().Where(x => x.PropertyType == inputModel.GetType()).FirstOrDefault();

            var hasErrors = ModelState.Values
                .Where(value => value.GetType().GetProperty("Key").GetValue(value).ToString().Contains(property.Name))
                .Any(value => value.Errors.Any());

            return !hasErrors;
        }

    }
}
