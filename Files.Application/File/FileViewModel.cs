using Files.Application.Board;
using Files.Application.Petition;
using Files.Application.ProceedingSession;
using System;
using System.Collections.Generic;

namespace Files.Application.File
{
    public class FileViewModel
    {
        public long Id { get; set; }
        public long ArchiveNo { get; set; }
        public DateTime ClientVisitDate { get; set; }
        public string ProceederReference { get; set; }
        public long Reqester { get; set; }
        public long Summoned { get; set; }
        public int Client { get; set; }
        public string FileClass { get; set; }
        public int HasMandate { get; set; }
        public string Description { get; set; }

        public EditBoard DiagnosisBoard { get; set; }
        public EditBoard DisputeResolutionBoard { get; set; }
        public EditProceedingSession FirstDiagnosisPS { get; set; }
        public EditProceedingSession LastDiagnosisPS { get; set; }
        public EditProceedingSession FirstDisputeResolutionPS { get; set; }
        public EditProceedingSession LastDisputeResolutionPS { get; set; }
        public EditPetition DiagnosisPetition { get; set; }
        public EditPetition DisputeResolutionPetition { get; set; }
    }
}