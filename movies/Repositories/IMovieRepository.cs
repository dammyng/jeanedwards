using System.Collections.Generic;
using System.Threading.Tasks;
using movies.Domain.Models;

namespace movies.Domain.Repositories
{
    public interface IMovieRepository
    {
        Task<Movies> GetMoviesWithTitle(string title);
        Task<MovieDetail> GetMovieWithId(string id);
        
    }
}