using System;
using Xunit;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using movies.Domain.Repositories;

namespace movies.Tests
{
    public class MoviesRepositoryUnit_Test
    {
        [Fact]
        public async Task GetMovieByTitle()
        {
            var services = new ServiceCollection();
            services.AddHttpClient();
            services.AddScoped<IMovieRepository, MovieRepository>();
            var serviceProvider = services.BuildServiceProvider();
            var service = serviceProvider.GetRequiredService<IMovieRepository>();
            var findWithTitle = await service.GetMoviesWithTitle("love");
            Assert.Equal("True", findWithTitle.Response);
        }

        [Fact]
        public async Task MovieDetails_Test()
        {
            var services = new ServiceCollection();
            services.AddHttpClient();
            services.AddScoped<IMovieRepository, MovieRepository>();
            var serviceProvider = services.BuildServiceProvider();
            var service = serviceProvider.GetRequiredService<IMovieRepository>();
            var findDetails = await service.GetMovieWithId("tt1570728");
            Assert.Equal("Crazy, Stupid, Love.", findDetails.Title);
        }
    }
}