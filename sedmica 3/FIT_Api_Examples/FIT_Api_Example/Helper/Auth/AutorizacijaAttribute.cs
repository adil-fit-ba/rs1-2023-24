using FIT_Api_Example.Data;
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


    public class MyAuthorizeImpl : IActionFilter
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
            var actionLog = filterContext.HttpContext.RequestServices.GetService<MyActionLog>()!;

            actionLog.Save();
        }

        public void OnActionExecuting(ActionExecutingContext filterContext)
        {
            var dbContext = filterContext.HttpContext.RequestServices.GetService<ApplicationDbContext>()!;
            var authService = filterContext.HttpContext.RequestServices.GetService<MyAuthService>()!;
            var emailLog = filterContext.HttpContext.RequestServices.GetService<MyEmailLog>()!;

            var loginInfo = authService.GetAuthInfo();
            if (!loginInfo.IsLogiran || loginInfo.KorisnickiNalog == null)
            {
                filterContext.Result = new UnauthorizedResult();
                return;
            }

            if (!loginInfo.KorisnickiNalog.IsAktiviranNalog)
            {
                filterContext.Result = new UnauthorizedObjectResult("korisnik nije aktiviran - provjerite email poruke " + loginInfo.KorisnickiNalog.Email);

                //ponovo posalji email za aktivaciju
                emailLog.NoviKorisnik(loginInfo.KorisnickiNalog);
                return;
            }

            if (loginInfo.KorisnickiNalog.Is2FRequired)
            {
                if (loginInfo.AutentifikacijaToken == null || !loginInfo.AutentifikacijaToken.Is2FOtkljucan)
                {
                    filterContext.Result = new UnauthorizedObjectResult("potrebno je otkljucati login sa codom poslat na email " + loginInfo.KorisnickiNalog.Email);
                    return;
                }

                return;//ok - ima pravo pristupa
            }
            
            if (loginInfo.KorisnickiNalog.IsStudent && _studenti)
            {
                return;//ok - ima pravo pristupa
            }

            if (loginInfo.KorisnickiNalog.IsDekan && _dekan)
            {
                return;//ok - ima pravo pristupa
            }

            if ((loginInfo.KorisnickiNalog.IsProdekan || loginInfo.KorisnickiNalog.IsDekan) && _prodekan)
            {
                return;//ok - ima pravo pristupa
            }
            if ((loginInfo.KorisnickiNalog.IsStudentskaSluzba || loginInfo.KorisnickiNalog.IsDekan || loginInfo.KorisnickiNalog.IsProdekan) && _studentskaSluzba)
            {
                return;//ok - ima pravo pristupa
            }
            
            //else nema pravo pristupa
            filterContext.Result = new UnauthorizedResult();
        }
    }
}
