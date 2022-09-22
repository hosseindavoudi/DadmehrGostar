using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _0_Framework.Domain;
using Files.Application.WorkHistory;

namespace File.Domain.WorkHistory
{
    public interface IWorkHistoryRepository : IRepository<long, WorkHistory>
    {
        List<EditWorkHistory> Search(long petitionId);
        void RemoveWorkHistories(List<EditWorkHistory> workHistories);
    }
}
