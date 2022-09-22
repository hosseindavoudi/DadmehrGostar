using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _0_Framework.Application;
using _0_Framework.InfraStructure;
using File.Domain.ProceedingSession;
using Files.Application.ProceedingSession;

namespace File.EfCore.Repository
{
    public class ProceedingSessionRepository : RepositoryBase<long, ProceedingSession>, IProceedingSessionRepository
    {
        private readonly FileContext _context;
        public ProceedingSessionRepository(FileContext context) : base(context)
        {
            _context = context;
        }

        public void RemoveProceedingSessions(List<EditProceedingSession> proceedingSessions)
        {
            foreach (var obj in proceedingSessions)
            {
                var proceedingSession = Get(obj.Id);

                Remove(proceedingSession);
            }
        }

        public List<EditProceedingSession> Search(long boardId)
        {
            var query = _context.ProceedingSessions.Select(x => new EditProceedingSession
            {
                Id = x.Id,
                Date = x.Date.ToFarsi(),
                Time = x.Time,
                Board_Id = x.Board_Id
            }).Where(x => x.Board_Id == boardId);

            //TODO if

            return query.ToList();
        }
    }
}
