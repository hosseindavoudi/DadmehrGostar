using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _0_Framework.Application;
using _0_Framework.InfraStructure;
using File.Domain.File;
using File.Domain.PenaltyTitle;
using Files.Application.PenaltyTitle;

namespace File.EfCore.Repository
{
    public class PenaltyTitleRepository : RepositoryBase<long, PenaltyTitle>, IPenaltyTitleRepository
    {
        private readonly FileContext _context;
        public PenaltyTitleRepository(FileContext context) : base(context)
        {
            _context = context;
        }

        public void RemovePenaltyTitles(List<EditPenaltyTitle> penaltyTitles)
        {
            foreach (var obj in penaltyTitles)
            {
                var penaltyTitle = Get(obj.Id);

                Remove(penaltyTitle);
            }
        }

        public List<EditPenaltyTitle> Search(long petitionId)
        {
            var query = _context.PenaltyTitles.Select(x => new EditPenaltyTitle
            {
                Id = x.Id,
                FromDate = x.FromDate.ToFarsi(),
                ToDate = x.ToDate.ToFarsi(),
                Title = x.Title,
                Day = x.Day,
                PaidAmount = x.PaidAmount,
                RemainingAmount = x.RemainingAmount,
                Petition_Id = petitionId
            }).Where(x => x.Petition_Id == petitionId);

            //TODO if

            return query.ToList();
        }
    }
}
