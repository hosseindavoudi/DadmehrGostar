using Files.Application.Board;
using Files.Application.Petition;
using Files.Application.ProceedingSession;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Files.Application.File
{
    public class CreateFile
    {
        [Required(ErrorMessage = "فیلد الزامی است")]
        [Range(0, int.MaxValue, ErrorMessage = "لطفا عدد وارد کنید")]
        public long ArchiveNo { get; set; }

        [Required(ErrorMessage = "فیلد الزامی است")]
        public string ClientVisitDate { get; set; }

        [Required(ErrorMessage = "فیلد الزامی است")]
        public string ProceederReference { get; set; }

        [Required(ErrorMessage = "فیلد الزامی است")]
        public long Reqester { get; set; }

        [Required(ErrorMessage = "فیلد الزامی است")]
        public long Summoned { get; set; }

        [Required(ErrorMessage = "فیلد الزامی است")]
        public int Client { get; set; }

        [Required(ErrorMessage = "فیلد الزامی است")]
        public string FileClass { get; set; }

        [Required(ErrorMessage = "فیلد الزامی است")]
        public int HasMandate { get; set; }


        public string Description { get; set; }
    }
}
