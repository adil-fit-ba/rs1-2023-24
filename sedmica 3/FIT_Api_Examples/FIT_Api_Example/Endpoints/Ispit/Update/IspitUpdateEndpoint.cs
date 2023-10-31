using FIT_Api_Example.Data;
using FIT_Api_Example.Data.Models;
using FIT_Api_Example.Helper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FIT_Api_Example.Endpoints.Ispit.Update
{
    [Route("ispit-update")]
    public class IspitUpdateEndpoint: MyBaseEndpoint<IspitUpdateRequest,  IspitUpdateResponse>
    {
        private readonly ApplicationDbContext _applicationDbContext;

        public IspitUpdateEndpoint(ApplicationDbContext applicationDbContext)
        {
            _applicationDbContext = applicationDbContext;
        }

        [HttpPost]
        public override async Task<IspitUpdateResponse> Obradi([FromBody] IspitUpdateRequest request, CancellationToken cancellationToken = default)
        {
            var ispiti = await _applicationDbContext.Ispit.FirstOrDefaultAsync(x => x.ID == request.Id, cancellationToken);

            if (ispiti == null)
            {
                throw new Exception("nije pronadjen ispit za id = " + request.Id);
            }

            ispiti.Komentar = request.Komentar;
            ispiti.DatumVrijemeIspita = request.Satnica;

            await _applicationDbContext.SaveChangesAsync(cancellationToken);//izvrašva se "insert into Ispit value ...."

            return new IspitUpdateResponse
            {
                IspitId = ispiti.ID
            };
        }
    }
}
