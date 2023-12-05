using FIT_Api_Example.Data;
using FIT_Api_Example.Data.Models;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;

namespace FIT_Api_Example.Services
{
    public class MyAuthService
    {
        private readonly ApplicationDbContext _applicationDbContext;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public MyAuthService(ApplicationDbContext applicationDbContext, IHttpContextAccessor httpContextAccessor)
        {
            _applicationDbContext = applicationDbContext;
            _httpContextAccessor = httpContextAccessor;
        }
        public bool JelLogiran()
        {
            return GetAuthInfo().IsLogiran;
        }

        public MyAuthInfo GetAuthInfo()
        {
            string? authToken = _httpContextAccessor.HttpContext!.Request.Headers["my-auth-token"];

            AutentifikacijaToken? autentifikacijaToken = _applicationDbContext.AutentifikacijaToken
                .Include(x => x.KorisnickiNalog)
                .SingleOrDefault(x => x.Vrijednost == authToken);

            return new MyAuthInfo(autentifikacijaToken);
        }
    }

    public class MyAuthInfo
    {
        public MyAuthInfo(AutentifikacijaToken? autentifikacijaToken)
        {
            this.AutentifikacijaToken = autentifikacijaToken;
        }

        [JsonIgnore]
        public KorisnickiNalog? KorisnickiNalog => AutentifikacijaToken?.KorisnickiNalog;
        public AutentifikacijaToken? AutentifikacijaToken { get; set; }

        public bool IsLogiran => KorisnickiNalog != null;

    }
}
