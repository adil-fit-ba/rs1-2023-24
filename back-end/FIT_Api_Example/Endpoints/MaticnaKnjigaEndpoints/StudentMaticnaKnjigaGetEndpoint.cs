using FIT_Api_Example.Data;
using FIT_Api_Example.Helper;
using FIT_Api_Example.Helper.Auth;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FIT_Api_Example.Endpoints.StudentEndpoints.MaticnaKnjigaEndpoints.Get;

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
           
        };
        


        return result;
    }
}