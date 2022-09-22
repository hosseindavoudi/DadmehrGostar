using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _0_Framework.Application;
using Files.Application.WorkHistory;

namespace Files.Application.Petition
{
    public interface IPetitionApplication
    {
        OperationResult Create(CreatePetition command);
        OperationResult Edit(EditPetition command);
        EditPetition GetDetails(long id);
        EditPetition GetDetails(long fileId, int boardTypeId);
        List<PetitionViewModel> Search(PetitionSearchModel searchModel);
    }
}
