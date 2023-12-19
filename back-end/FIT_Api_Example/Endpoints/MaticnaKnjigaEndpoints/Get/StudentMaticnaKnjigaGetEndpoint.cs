using FIT_Api_Example.Data;
using FIT_Api_Example.Helper;
using FIT_Api_Example.Helper.Auth;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FIT_Api_Example.Endpoints.MaticnaKnjigaEndpoints.Get;

[Route("student/maticna-knjiga")]
[MyAuthorization]
public class StudentMaticnaKnjigaGetEndpoint : MyBaseEndpoint<int, StudentMaticnaKnjigaGetResponse>
{
    private readonly ApplicationDbContext _applicationDbContext;
    private readonly MyAuthService _authService;
    public StudentMaticnaKnjigaGetEndpoint(ApplicationDbContext applicationDbContext, MyAuthService authService)
    {
        _applicationDbContext = applicationDbContext;
        _authService = authService;
    }

    [HttpGet("{id}")]
    public override async Task<StudentMaticnaKnjigaGetResponse> Obradi(int id, CancellationToken cancellationToken)
    {
        var student = await _applicationDbContext.Student.FindAsync(id);

        if (student is null)
            throw new Exception("not found student for id = " + id);

        var result = new StudentMaticnaKnjigaGetResponse
        {

            Id = student.ID,
            Ime = student.Ime,
            Prezime = student.Prezime,
            UpisaneGodine = await _applicationDbContext
                .AkGodines
                .Where(x => x.StudentId == student.ID)
                .Select(x => new StudentMaticnaKnjigaGetResponseUpisaneGodine
                {
                    Id = x.Id,
                    AkademskaGodina = x.AkademskaGodina.Opis,
                    GodinaStudija = x.Godinastudina.ToString(),
                    KorisnikEvidentirao = new StudentMaticnaKnjigaGetResponseUpisaneGodineKorisnik
                    {
                        Id = x.EvidentiraoKorisnikId,
                        Ime = x.EvidentiraoKorisnik.KorisnickoIme,
                        Prezime = x.EvidentiraoKorisnik.KorisnickoIme
                    },
                    Obnova = x.JelObnova,
                    ZimskiSemestarUpis = x.DatumUpisZimski,
                    ZimskiSemestarOvjera = x.DatumOvjeraZimski
                }).ToListAsync(cancellationToken)
        };



        return result;
    }
}