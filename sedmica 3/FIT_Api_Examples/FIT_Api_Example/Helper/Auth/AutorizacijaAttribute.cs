using FIT_Api_Example.Data;
using FIT_Api_Example.Data.Models;
using FIT_Api_Example.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace FIT_Api_Example.Helper.Auth
{
    public class AutorizacijaAttribute : TypeFilterAttribute
    {
        public AutorizacijaAttribute(bool studentskaSluzba, bool prodekan, bool dekan, bool studenti, bool nastavnici)
            : base(typeof(MyAuthorizeImpl))
        {
            Arguments = new object[] { studentskaSluzba, prodekan, dekan, studenti, nastavnici };
        }
    }


    public class MyAuthorizeImpl : IAsyncActionFilter
    {
        private readonly bool _studentskaSluzba;
        private readonly bool _prodekan;
        private readonly bool _dekan;
        private readonly bool _studenti;
        private readonly bool _nastavnici;

        public MyAuthorizeImpl(bool studentskaSluzba, bool prodekan, bool dekan, bool studenti, bool nastavnici)
        {
            _studentskaSluzba = studentskaSluzba;
            _prodekan = prodekan;
            _dekan = dekan;
            _studenti = studenti;
            _nastavnici = nastavnici;
        }
        public void OnActionExecuted(ActionExecutedContext filterContext)
        {
           
         
        }

    

        public async Task  OnActionExecutionAsync(ActionExecutingContext filterContext, ActionExecutionDelegate next)
        {
            var dbContext = filterContext.HttpContext.RequestServices.GetService<ApplicationDbContext>()!;
            var authService = filterContext.HttpContext.RequestServices.GetService<MyAuthService>()!;
            var emailLog = filterContext.HttpContext.RequestServices.GetService<MyEmailLog>()!;
            var actionLog = filterContext.HttpContext.RequestServices.GetService<MyActionLog>()!;

            var loginInfo = authService.GetAuthInfo();

            if (loginInfo == null || !loginInfo.IsLogiran)
            {
                filterContext.Result = new UnauthorizedResult();
                return;//prekid
            }

            KorisnickiNalog k = loginInfo.KorisnickiNalog;

            if (!k.IsAktiviranNalog)
            {     
                //ponovo posalji email za aktivaciju
                emailLog.NoviKorisnik(k);
                filterContext.Result = new UnauthorizedObjectResult("korisnik nije aktiviran - provjerite email poruke " + k.Email);
                return; //prekid
            }

            if (k.Is2FRequired)
            {
                if (loginInfo.AutentifikacijaToken == null || !loginInfo.AutentifikacijaToken.Is2FOtkljucan)
                {
                    filterContext.Result = new UnauthorizedObjectResult("potrebno je otkljucati login sa codom poslat na email " + k.Email);
                    return; //prekid;
                }
            }

            bool imaPravoPristupa = k.IsStudent && _studenti;

            if (k.IsDekan && _dekan)
            {
                imaPravoPristupa = true;
            }

            if (k.IsNastavnik && _nastavnici)
            {
                imaPravoPristupa = true;
            }

            if ((k.IsProdekan || k.IsDekan) && _prodekan)
            {
                imaPravoPristupa = true;
            }
            if ((k.IsStudentskaSluzba || k.IsDekan || k.IsProdekan) && _studentskaSluzba)
            {
                imaPravoPristupa = true;
            }

            if (imaPravoPristupa)
            {
                await next();
                //code poslije akcije
                await actionLog.Save();
            }
            else
            {
                filterContext.Result = new UnauthorizedResult();
            }
        }
    }
}
