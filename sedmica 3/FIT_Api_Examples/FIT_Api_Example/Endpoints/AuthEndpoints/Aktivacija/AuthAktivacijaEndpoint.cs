using FIT_Api_Example.Data;
using FIT_Api_Example.Helper;
using Microsoft.AspNetCore.Mvc;

namespace FIT_Api_Example.Endpoints.AuthEndpoints.Aktivacija;

[Route("auth")]
public class AuthAktivacijaEndpoint : MyBaseEndpoint<AuthAktivacijaRequest, NoResponse>
{
    private readonly ApplicationDbContext _applicationDbContext;

    public AuthAktivacijaEndpoint(ApplicationDbContext applicationDbContext)
    {
        _applicationDbContext = applicationDbContext;
    }

    [HttpPost("aktivacija")]
    public override async Task<NoResponse> Obradi([FromBody] AuthAktivacijaRequest request, CancellationToken cancellationToken)
    {
        //1- preuzeti token iz requesta
        var token = request.Nesto;

        //2- pronadji u DB korisnika
        var k = _applicationDbContext.KorisnickiNalog.FirstOrDefault(x => x.AktivacijaNalogaGuid == token);

        if (k == null)
            throw new Exception("neispravan token/url");

        //3- postaviti IsAKtiviranNalog na true
        k.IsAktiviranNalog = true;
        await _applicationDbContext.SaveChangesAsync(cancellationToken);
      
        return new NoResponse();
    }


}