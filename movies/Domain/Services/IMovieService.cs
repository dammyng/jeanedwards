

using System.Threading.Tasks;
using movies.Domain.Models;

namespace movies.Domain.Services
{

    public interface IMovieService
    {
      Task<Movies> GetMovieByTitleAsync(string title);
      Task<MovieDetail> GetMovieDetailAsync(string title);
    }
}