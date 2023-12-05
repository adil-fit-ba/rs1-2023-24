using FIT_Api_Example.Data;
using FIT_Api_Example.Data.Models;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http.Extensions;

namespace FIT_Api_Example.Services
{
    public class MyActionLog
    {
        private readonly MyAuthService _myAuthService;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly ApplicationDbContext _dbContext;

        public MyActionLog(MyAuthService myAuthService, IHttpContextAccessor httpContextAccessor, ApplicationDbContext dbContext)
        {
            _myAuthService = myAuthService;
            _httpContextAccessor = httpContextAccessor;
            _dbContext = dbContext;
        }

        public int Save(IExceptionHandlerPathFeature? exceptionMessage = null)
        {
            KorisnickiNalog? korisnik = _myAuthService.GetAuthInfo().KorisnickiNalog;

            var request = _httpContextAccessor.HttpContext!.Request;

            var queryString = request.Query;

            //if (queryString.Count == 0 && !request.HasFormContentType)
            //    return 0;

            //IHttpRequestFeature feature = request.HttpContext.Features.Get<IHttpRequestFeature>();
            string detalji = "";
            if (request.HasFormContentType)
            {
                foreach (string key in request.Form.Keys)
                {
                    detalji += " | " + key + "=" + request.Form[key];
                }
            }

            // convert stream to string
            //StreamReader reader = new StreamReader(request.Body);
//string bodyText = reader.ReadToEnd();

            var x = new LogKretanjePoSistemu
            {
                korisnik = korisnik,
                vrijeme = DateTime.Now,
                queryPath = request.GetEncodedPathAndQuery(),
                postData = detalji ,//+ "" + bodyText,
                ipAdresa = request.HttpContext.Connection.RemoteIpAddress?.ToString(),
            };

            if (exceptionMessage != null)
            {
                x.isException = true;
                x.exceptionMessage = exceptionMessage.Error.Message + " |" + exceptionMessage.Error.InnerException;
            }
            _dbContext.Add(x);
            _dbContext.SaveChanges();

            return x.id;
        }




    }
}
