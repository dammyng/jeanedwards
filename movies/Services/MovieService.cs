using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using movies.Domain.Models;
using movies.Domain.Repositories;
using movies.Domain.Services;

namespace movies.Services
{
    public class MovieService : IMovieService
    {
        private readonly IMovieRepository _movieRepository;

        public MovieService(HttpClient client, IMovieRepository movieRepository)
        {
            this._movieRepository = movieRepository;

        }

        public async Task<MovieDetail> GetMovieDetailAsync(string id)
        {
            MovieDetail details = await _movieRepository.GetMovieWithId(id);
            return details;
        }

        async Task<Movies> IMovieService.GetMovieByTitleAsync(string title)
        {
            Movies movies = await _movieRepository.GetMoviesWithTitle(title);
            return movies;
        }
    }
}