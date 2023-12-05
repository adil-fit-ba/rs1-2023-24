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

        //2- pronadji u DB korisnika

        //3- postaviti IsAKtiviranNalog na true

      
        return new NoResponse();
    }


}