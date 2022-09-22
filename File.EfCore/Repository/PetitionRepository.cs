using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _0_Framework.InfraStructure;
using Files.Application.Petition;
using File.Domain.File;
using File.Domain.Petition;
using Microsoft.EntityFrameworkCore;
using _0_Framework.Application;

namespace File.EfCore.Repository
{
    public class PetitionRepository : RepositoryBase<long, Petition>, IPetitionRepository
    {
        private readonly FileContext _context;
        public PetitionRepository(FileContext context) : base(context)
        {
            _context = context;
        }

        public EditPetition GetDetails(long id)
        {
            return _context.Petitions.Select(x => new EditPetition
            {
                Id = x.Id,
                PetitionIssuanceDate = x.PetitionIssuanceDate.ToFarsi(),
                NotificationPetitionDate = x.NotificationPetitionDate.ToFarsi(),
                TotalPenalty = x.TotalPenalty,
                TotalPenaltyTitles = x.TotalPenaltyTitles,
                Description = x.Description,
                File_Id = x.File_Id,
                BoardType_Id = x.BoardType_Id
            }).FirstOrDefault(x => x.Id == id);
        }

        public EditPetition GetDetails(long fileId, int boardTypeId)
        {
            return _context.Petitions.Select(x => new EditPetition
            {
                Id = x.Id,
                PetitionIssuanceDate = x.PetitionIssuanceDate.ToFarsi(),
                NotificationPetitionDate = x.NotificationPetitionDate.ToFarsi(),
                TotalPenalty = x.TotalPenalty,
                TotalPenaltyTitles = x.TotalPenaltyTitles,
                Description = x.Description,
                File_Id = x.File_Id,
                BoardType_Id = x.BoardType_Id
            }).FirstOrDefault(x => x.File_Id == fileId && x.BoardType_Id == boardTypeId);
        }

        public List<PetitionViewModel> Search(PetitionSearchModel searchModel)
        {
            var query = _context.Petitions.Select(x => new PetitionViewModel
            {
                Id = x.Id,
                PetitionIssuanceDate = x.PetitionIssuanceDate,
                NotificationPetitionDate = x.NotificationPetitionDate,
                TotalPenalty = x.TotalPenalty,
                TotalPenaltyTitles = x.TotalPenaltyTitles,
                Description = x.Description,
                BoardType_Id = x.BoardType_Id,
                File_Id = x.File_Id,
            });

            //TODO if

            return query.OrderByDescending(x => x.Id).ToList();
        }
    }
}
