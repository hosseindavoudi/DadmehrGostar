using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Files.Application.PenaltyTitle
{
    public class CreatePenaltyTitle
    {
        public string FromDate { get; set; }
        public string ToDate { get; set; }
        public string Title { get; set; }
        public string Day { get; set; }
        public long Petition_Id { get; set; }
        public string PaidAmount { get; set; }
        public string RemainingAmount { get; set; }

    }
}
