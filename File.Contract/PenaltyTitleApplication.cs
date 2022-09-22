using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _0_Framework.Application;
using File.Domain.File;
using File.Domain.PenaltyTitle;
using Files.Application.File;
using Files.Application.PenaltyTitle;

namespace File.Contract
{
    public class PenaltyTitleApplication : IPenaltyTitleApplication
    {
        private readonly IPenaltyTitleRepository _penaltyTitleRepository;

        public PenaltyTitleApplication(IPenaltyTitleRepository penaltyTitleRepository)
        {
            _penaltyTitleRepository = penaltyTitleRepository;
        }

        public OperationResult Create(CreatePenaltyTitle command)
        {
            var operation = new OperationResult();

            var FromDate = new DateTime();
            FromDate = command.FromDate.ToGeorgian();

            var ToDate = new DateTime();
            ToDate = command.ToDate.ToGeorgian();

            //TODO if
            //if(_BoardRepository.Exists(x=>x.Branch == command.Branch))
            //    operation.Failed("fail message")

            var penaltyTitle = new PenaltyTitle(FromDate, ToDate, command.Title, command.Day, command.Petition_Id, command.PaidAmount, command.RemainingAmount);
            _penaltyTitleRepository.Create(penaltyTitle);
            _penaltyTitleRepository.SaveChanges();

            return operation.Succcedded();
        }

        public OperationResult CreatePenaltyTitles(List<EditPenaltyTitle> penaltyTitles, long petitionId)
        {
            var operation = new OperationResult();

            RemovePenaltyTitles(petitionId);

            foreach (var obj in penaltyTitles)
            {
                obj.Petition_Id = petitionId;
                obj.Id = 0;

                Create(obj);
            }

            return operation.Succcedded();
        }

        public OperationResult Edit(EditPenaltyTitle command)
        {
            var operation = new OperationResult();
            var penaltyTitle = _penaltyTitleRepository.Get(command.Id);

            var FromDate = new DateTime();
            FromDate = command.FromDate.ToGeorgian();

            var ToDate = new DateTime();
            ToDate = command.ToDate.ToGeorgian();

            //TODO
            //if(_BoardRepository.Exists(x=>x.Branch == command.Branch))
            //    operation.Failed("fail message")

            penaltyTitle.Edit(FromDate, ToDate, command.Title, command.Day, command.Petition_Id, command.PaidAmount, command.RemainingAmount);
            _penaltyTitleRepository.SaveChanges();

            return operation.Succcedded();
        }

        public void RemovePenaltyTitles(long petitionId)
        {
            var objects = Search(petitionId);

            _penaltyTitleRepository.RemovePenaltyTitles(objects);
        }

        public List<EditPenaltyTitle> Search(long petitionId)
        {
            return _penaltyTitleRepository.Search(petitionId);
        }
    }
}
