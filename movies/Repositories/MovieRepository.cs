using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using movies.Domain.Models;
using Newtonsoft.Json;

namespace movies.Domain.Repositories
{
    public class MovieRepository : IMovieRepository
    {
        private const string BaseUrl = "http://www.omdbapi.com/";
        private readonly HttpClient _client;

        public MovieRepository(HttpClient client)
        {
            _client = client;
            _client.DefaultRequestHeaders.Accept.Clear();
            _client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

        }

        public async Task<Movies> GetMoviesWithTitle(string title)
        {
            var url = $"{BaseUrl}?s={title}&apikey=982f4e20";

            
            var response = await _client.GetAsync(url).ConfigureAwait(false);
            if (!response.IsSuccessStatusCode)
            {
                throw new Exception("Cannot retrieve movies");
            }

            var json = await response.Content.ReadAsStringAsync().ConfigureAwait(false);

            var movie = JsonConvert.DeserializeObject<Movies>(json);
            return movie;
        }

        public async Task<MovieDetail> GetMovieWithId(string id)
        {

            var url = $"{BaseUrl}?i={id}&apikey=982f4e20";

            var response = await _client.GetAsync(url).ConfigureAwait(false);
            if (!response.IsSuccessStatusCode)
            {
                throw new Exception("Cannot retrieve movies");
            }

            var json = await response.Content.ReadAsStringAsync().ConfigureAwait(false);

            var movie = JsonConvert.DeserializeObject<MovieDetail>(json);
            return movie;        }
    }
}