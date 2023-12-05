using FIT_Api_Example.Data;
using FIT_Api_Example.Data.Models;

namespace FIT_Api_Example.Services
{
    public class MyEmailLog
    {
        const string posalji_na_moj_email = "jirawix168@tohup.com";//https://temp-mail.org/en/

        private readonly ApplicationDbContext _applicationDbContext;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly MyEmailSender _emailSender;

        public MyEmailLog(MyEmailSender emailSender, IHttpContextAccessor httpContextAccessor, ApplicationDbContext applicationDbContext)
        {
            _emailSender = emailSender;
            _httpContextAccessor = httpContextAccessor;
            _applicationDbContext = applicationDbContext;
        }

        public void UspjesnoLogiranKorisnik(AutentifikacijaToken token)
        {
            var logiraniKorisnik = token.KorisnickiNalog;
            if (logiraniKorisnik.Is2FRequired)
            {
                var poruka =  $"Postovani {logiraniKorisnik.KorisnickoIme}, <br> " +
                              $"Code za 2F je <br>" +
                              $"{token.Code2F}<br>" +
                              $"Login info {DateTime.Now}";
                _emailSender.Send(posalji_na_moj_email, "Code za 2F autorizaciju", poruka, true);
            }
        }

        public void NoviKorisnik(KorisnickiNalog korisnickiNalog)
        {
            if (!korisnickiNalog.IsAktiviranNalog)
            {
                var Request = _httpContextAccessor.HttpContext!.Request;
                var location = $"{Request.Scheme}://{Request.Host}";

                string url = location +"/nastavnik/Aktivacija/" + korisnickiNalog.AktivacijaNalogaGuid;//angularapp/putajadokomponente
                string poruka = $"Postovani/a {korisnickiNalog.KorisnickoIme}, <br> Link za aktivaciju vaseg naloga <a href='{url}'>{url}</a>... {DateTime.Now}";
                _emailSender.Send(posalji_na_moj_email, "Aktivacija korisnika", poruka, true);

            }
        }
    }
}
