using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Files.Application.Board
{
    public class CreateBoard
    {
        //[Required(ErrorMessage = "فیلد الزامی است")]
        public string DisputeResolutionPetitionDate { get; set; }

        //[Required(ErrorMessage = "فیلد الزامی است")]
        public string Branch { get; set; }

        //[Required(ErrorMessage = "فیلد الزامی است")]
        public string BoardChairman { get; set; }

        public string ExpertReport { get; set; }
        public long File_Id { get; set; }
        public int BoardType_Id { get; set; }

    }
}
