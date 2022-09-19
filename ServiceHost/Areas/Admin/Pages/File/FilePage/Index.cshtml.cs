using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Files.Application.File;
using Files.Application.Petition;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ServiceHost.Areas.Admin.Pages.File.FilePage
{
    public class IndexModel : PageModel
    {
        public FileSearchModel searchModel;
        public List<FileViewModel> viewModels;

        private readonly IFileApplication _fileApplication;

        public IndexModel(IFileApplication fileApplication)
        {
            _fileApplication = fileApplication;
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

        public IActionResult OnGetEditFile(long id)
        {
            var job = _fileApplication.GetDetails(id);


            return Partial("Edit", job);
        }

        public IActionResult OnGetCreatePetition(bool boardTypeId)
        {
            var createPetition = new CreatePetition();

            createPetition.BoardTypeId = boardTypeId;

            return Partial("./CreatePetition", createPetition);
        }

        public IActionResult OnPostCreatePetition(CreatePetition command)
        {
            var result = true;
            //var result = _fileApplication.Create(command);
            return new JsonResult(result);
        }


        public JsonResult OnPostEdit(EditFile command)
        {

            if (ModelState.IsValid)
            {

            }


            var result = _fileApplication.Edit(command);

            return new JsonResult(result);


        }
        public IActionResult OnGetDetails(long id)
        {
            var editJob = _fileApplication.GetDetails(id);

            return Partial("Details", editJob);
        }

        public JsonResult OnPostCheckUniqueArchiveNo(string archiveNo)
        {
            var sModel = new FileSearchModel { ArchiveNo = long.Parse(archiveNo) };
            var vModel = _fileApplication.Search(sModel);

            return new JsonResult(new { stat = vModel.Count() == 0 ? true : false, message = vModel == null ? "" : "شماره بایگانی تکراری است" });
        }

    }
}
