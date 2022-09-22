using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Files.Application.ProceedingSession
{
    public class CreateProceedingSession
    {
        //[Required(ErrorMessage = "فیلد الزامی است")]
        public string Date { get; set; }

        //[Required(ErrorMessage = "فیلد الزامی است")]
        public string Time { get; set; }
        public long Board_Id { get; set; }
    }
}
