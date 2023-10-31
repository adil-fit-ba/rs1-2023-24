using FIT_Api_Example.Data;
using FIT_Api_Example.Data.Models;
using FIT_Api_Example.Modul1.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FIT_Api_Example.Modul1.Controllers
{
    //[Authorize]
    [ApiController]
    [Route("[controller]/[action]")]
    public class DrzavaController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public DrzavaController(ApplicationDbContext dbContext)
        {
            this._dbContext = dbContext;
        }

     
        [HttpPost]
        public async Task<Drzava> Snimi([FromBody] DrzavaSnimiVM x, CancellationToken cancellationToken)
        {
            Drzava? objekat;

            if (x.id == 0)
            {
                objekat = new Drzava();
                _dbContext.Add(objekat);//priprema sql
            }
            else
            {
                objekat = await _dbContext.Drzava.FindAsync(x.id);
            }

            objekat.Naziv = x.naziv;
            objekat.Skracenica = x.skracenica;

            await _dbContext.SaveChangesAsync(cancellationToken);
            return objekat;
        }

        [HttpGet]
        public async Task<ActionResult> GetAll(CancellationToken cancellationToken)
        {
            var data = _dbContext.Drzava
                .OrderBy(s => s.Naziv)
                .Select(s => new DrzavaGetAllVM()
                {
                    id = s.ID,
                    skracenica = s.Skracenica,
                    naziv = s.Naziv,
                })
                .Take(100);
            var rezultat = await data.ToListAsync(cancellationToken);
            return Ok(rezultat);
        }

        [HttpGet]
        public async Task<List<DrzavaGetAllVM>> GetAll2(CancellationToken cancellationToken)
        {
            var data = _dbContext.Drzava
                .OrderBy(s => s.Naziv)
                .Select(s => new DrzavaGetAllVM()
                {
                    id = s.ID,
                    skracenica = s.Skracenica,
                    naziv = s.Naziv,
                })
                .Take(100);
            List<DrzavaGetAllVM> rezultat = await data.ToListAsync(cancellationToken);
            return rezultat;
        }
    }

   
}
