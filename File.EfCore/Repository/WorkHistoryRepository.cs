using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _0_Framework.Application;
using _0_Framework.InfraStructure;
using File.Domain.File;
using File.Domain.WorkHistory;
using Files.Application.WorkHistory;

namespace File.EfCore.Repository
{
    public class WorkHistoryRepository : RepositoryBase<long, WorkHistory>, IWorkHistoryRepository
    {
        private readonly FileContext _context;
        public WorkHistoryRepository(FileContext context) : base(context)
        {
            _context = context;
        }

        public List<EditWorkHistory> Search(long petitionId)
        {
            var query = _context.WorkHistory.Select(x => new EditWorkHistory
            {
                Id = x.Id,
                FromDate = x.FromDate.ToFarsi(),
                ToDate = x.ToDate.ToFarsi(),
                WorkingHoursPerDay = x.WorkingHoursPerDay,
                WorkingHoursPerWeek = x.WorkingHoursPerWeek,
                Description = x.Description,
                Petition_Id = petitionId
            }).Where(x => x.Petition_Id == petitionId);

            //TODO if

            return query.ToList();
        }

        public void RemoveWorkHistories(List<EditWorkHistory> workHistories)
        {
            foreach(var obj in workHistories)
            {
                var workHistory = Get(obj.Id);

                Remove(workHistory);
            }
        }
    }
}
