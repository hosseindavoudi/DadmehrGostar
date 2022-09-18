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
        public long ArchiveNo { get; set; }
        public string ClientVisitDate { get; set; }
        public string ProceederReference { get; set; }
        public long Reqester { get; set; }
        public long Summoned { get; set; }
        public bool Client { get; set; }
        [Required]
        public string FileClass { get; set; }
        public bool HasMandate { get; set; }
        public string Description { get; set; }

        public CreateBoard createDiagnosisBoard { get; set; }
        public CreateBoard createDisputeResolutionBoard { get; set; }
        public CreateProceedingSession createDiagnosisProceedingSession { get; set; }
        public CreateProceedingSession createDisputeResolutionProceedingSession { get; set; }
        public CreatePetition createPetition { get; set; }
    }
}
