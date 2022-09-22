using Files.Application.Board;
using Files.Application.Petition;
using Files.Application.ProceedingSession;
using System.Collections.Generic;

namespace Files.Application.File
{
    public class EditFile : CreateFile
    {
        public long Id { get; set; }

        public EditBoard createDiagnosisBoard { get; set; }
        public EditBoard createDisputeResolutionBoard { get; set; }
        public List<EditProceedingSession> createDiagnosisPS { get; set; }
        public List<EditProceedingSession> createDisputeResolutionPS { get; set; }
        public EditPetition createDiagnosisPetition { get; set; }
        public EditPetition createDisputeResolutionPetition { get; set; }
    }
}