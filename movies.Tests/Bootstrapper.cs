using System;
using Microsoft.Extensions.DependencyInjection;
using movies.Domain.Repositories;
using movies.Domain.Services;
using movies.Services;

namespace movies.Tests
{
    public static class Bootstrapper
    {
        public static void UseServices(this IServiceCollection services)
        {
            services.AddHttpClient<IMovieRepository>();
        }
    }
}