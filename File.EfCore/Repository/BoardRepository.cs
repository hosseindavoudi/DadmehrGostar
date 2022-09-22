using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _0_Framework.InfraStructure;
using Files.Application.Board;
using File.Domain.Board;
using Microsoft.EntityFrameworkCore;
using _0_Framework.Application;

namespace File.EfCore.Repository
{
    public class BoardRepository : RepositoryBase<long, Board>, IBoardRepository
    {
        private readonly FileContext _context;
        public BoardRepository(FileContext context) : base(context)
        {
            _context = context;
        }

        public EditBoard GetDetails(long id)
        {
            return _context.Boards.Select(x => new EditBoard
            {
                Id = x.Id,
                BoardChairman = x.BoardChairman,
                Branch = x.Branch,
                ExpertReport = x.ExpertReport,
                DisputeResolutionPetitionDate = x.DisputeResolutionPetitionDate.ToFarsi(),
                File_Id = x.File_Id,
                BoardType_Id = x.BoardType_Id,
            }).FirstOrDefault(x => x.Id == id);
        }

        public EditBoard GetDetails(long fileId, int boardTypeId)
        {
            return _context.Boards.Select(x => new EditBoard
            {
                Id = x.Id,
                BoardChairman = x.BoardChairman,
                Branch = x.Branch,
                ExpertReport = x.ExpertReport,
                DisputeResolutionPetitionDate = x.DisputeResolutionPetitionDate.ToFarsi(),
                File_Id = x.File_Id,
                BoardType_Id = x.BoardType_Id,
            }).FirstOrDefault(x => x.File_Id == fileId && x.BoardType_Id == boardTypeId);
        }

        public List<BoardViewModel> Search(BoardSearchModel searchModel)
        {
            var query = _context.Boards.Select(x => new BoardViewModel
            {
                Id = x.Id,
                BoardChairman = x.BoardChairman,
                Branch = x.Branch,
                ExpertReport = x.ExpertReport,
                DisputeResolutionPetitionDate = x.DisputeResolutionPetitionDate,
                File_Id = x.File_Id,
                BoardType_Id = x.BoardType_Id,
            });

            //TODO if

            return query.OrderByDescending(x => x.Id).ToList();
        }
    }
}
