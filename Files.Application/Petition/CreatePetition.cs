using Files.Application.Board;
using Files.Application.File;
using Files.Application.WorkHistory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Files.Application.Petition
{
    public class CreatePetition
    {
        public string PetitionIssuanceDate { get; set; }
        public string NotificationPetitionDate { get; set; }
        public string TotalPenalty { get; set; }
        public string TotalPenaltyTitles { get; set; }
        public string Description { get; set; }
        public long Board_Id { get; set; }
        public long File_Id { get; set; }

        public bool BoardProcessingStage { get; set; }
        public bool BoardTypeId { get; set; }
        public CreateFile FileData { get; set; }
        public CreateWorkHistory CreateWorkHistory { get; set; }

    }
}
