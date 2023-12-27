using FIT_Api_Example.Data;
using FIT_Api_Example.Data.Models;
using FIT_Api_Example.Helper;
using FIT_Api_Example.Helper.Auth;
using FIT_Api_Example.SignalRHubs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace FIT_Api_Example.Endpoints.MaticnaKnjigaEndpoints.Dodaj;

[Route("student/maticna-knjiga")]
[MyAuthorization]
public class StudentMaticnaKnjigaDodajEndpoint : MyBaseEndpoint<StudentMaticnaKnjigaDodajRequest, NoResponse>
{
    private readonly ApplicationDbContext _applicationDbContext;
    private readonly MyAuthService _authService;
    private readonly IHubContext<PorukeHub> _porukeHub;
    public StudentMaticnaKnjigaDodajEndpoint(ApplicationDbContext applicationDbContext, MyAuthService authService, IHubContext<PorukeHub> porukeHub)
    {
        _applicationDbContext = applicationDbContext;
        _authService = authService;
        _porukeHub = porukeHub;
    }

    [HttpPost()]
    public override async Task<NoResponse> Obradi([FromBody]StudentMaticnaKnjigaDodajRequest request, CancellationToken cancellationToken)
    {
        var noviZapis = new UpisAkGodine
        {
            AkademskaGodinaId = request.AkademskaGodinaID,
            CijenaSkolarine = request.CijenaSkolarine,
            Godinastudina = request.GodinaStudija,
            JelObnova = request.Obnova,
            DatumUpisZimski = request.ZimskiSemestarUpis,
            EvidentiraoKorisnikId = _authService.GetAuthInfo().korisnickiNalog!.ID,
            StudentId = request.StudentID
        };

        await _applicationDbContext.AddAsync(noviZapis,cancellationToken);
        await _applicationDbContext.SaveChangesAsync(cancellationToken);

        var student = await _applicationDbContext.Student.FindAsync(request.StudentID);

        string p = "Trenutno vrijeme je " + DateTime.Now;
        await _porukeHub.Clients.Groups("iris").SendAsync("prijem_poruke_js", p + " - " + student.BrojIndeksa, cancellationToken: cancellationToken);

        return new NoResponse();
    }
}