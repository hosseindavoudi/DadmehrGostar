using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _0_Framework.Domain;
using Files.Application.ProceedingSession;

namespace File.Domain.ProceedingSession
{
    public interface IProceedingSessionRepository : IRepository<long, ProceedingSession>
    {
        List<EditProceedingSession> Search(long boardId);
        void RemoveProceedingSessions(List<EditProceedingSession> proceedingSessions);

    }
}
