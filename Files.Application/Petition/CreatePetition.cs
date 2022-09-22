using Files.Application.Board;
using Files.Application.File;
using Files.Application.WorkHistory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Files.Application.PenaltyTitle;
using System.ComponentModel.DataAnnotations;

namespace Files.Application.Petition
{
    public class CreatePetition
    {
        //[Required(ErrorMessage = "فیلد الزامی است")]
        public string PetitionIssuanceDate { get; set; }
        //[Required(ErrorMessage = "فیلد الزامی است")]
        public string NotificationPetitionDate { get; set; }
        //[Required(ErrorMessage = "فیلد الزامی است")]
        public string TotalPenalty { get; set; }
        public string TotalPenaltyTitles { get; set; }
        public string Description { get; set; }
        public int BoardType_Id { get; set; }
        public long File_Id { get; set; }

        public bool BoardProcessingStage { get; set; }
        public bool BoardTypeId { get; set; }
        public EditFile FileData { get; set; }
        public List<EditWorkHistory> CreateWorkHistory { get; set; }
        public List<EditPenaltyTitle> CreatePenaltyTitle { get; set; }

    }
}
