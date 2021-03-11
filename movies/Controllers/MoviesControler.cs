using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using movies.Domain.Models;
using movies.Domain.Services;
using movies.Resources;

namespace movieservice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private readonly IMovieService _movieservice;

        public MoviesController(IMovieService movieService)
        {
            _movieservice = movieService;
        }
       

        // GET api/movies/love
        [HttpGet("{title}")]
        public async Task<JsonResult> GetAsync(string title)
        {
            var movies = await _movieservice.GetMovieByTitleAsync(title);
            return new  JsonResult(movies);
        }

           // GET api/movies/love
        [HttpGet("details/{id}")]
        public async Task<JsonResult> Details(string id)
        {
            var movies = await _movieservice.GetMovieDetailAsync(id);
            return new  JsonResult(movies);
        }

       
    }
}
