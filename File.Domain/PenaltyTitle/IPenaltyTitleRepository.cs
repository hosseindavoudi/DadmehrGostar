using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _0_Framework.Domain;
using Files.Application.PenaltyTitle;

namespace File.Domain.PenaltyTitle
{
    public interface IPenaltyTitleRepository : IRepository<long, PenaltyTitle>
    {
        List<EditPenaltyTitle> Search(long petitionId);
        void RemovePenaltyTitles(List<EditPenaltyTitle> penaltyTitles);
    }
}
