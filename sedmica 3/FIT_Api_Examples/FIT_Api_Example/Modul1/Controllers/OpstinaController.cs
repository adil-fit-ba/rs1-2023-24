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
    public class OpstinaController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public OpstinaController(ApplicationDbContext dbContext)
        {
            this._dbContext = dbContext;
        }

        [HttpPost]
        public async Task<Opstina> Add([FromBody] OpstinaAddVM x, CancellationToken cancellationToken)
        {
            var newEmployee = new Opstina
            {
                description = x.opis,
                DrzavaID = x.drzava_id,
            };

            _dbContext.Add(newEmployee);
            await _dbContext.SaveChangesAsync(cancellationToken);
            return newEmployee;
        }

        [HttpGet]
        public async Task<ActionResult> GetByDrzava(int drzava_id, CancellationToken cancellationToken)
        {
            var data = _dbContext.Opstina.Where(x => x.DrzavaID == drzava_id)
                .OrderBy(s => s.description)
                .Select(s => new 
                {
                    id = s.ID,
                    opis = s.drzava.Naziv + " - " + s.description,
                })
                .AsQueryable();
            return Ok(await data.Take(100).ToListAsync(cancellationToken));
        }

        [HttpGet]
        public ActionResult GetByAll()
        {
            var data = _dbContext.Opstina
                .OrderBy(s => s.description)
                .Select(s => new 
                {
                    id = s.ID,
                    opis = s.drzava.Naziv + " - " + s.description,
                })
                .AsQueryable();
            return Ok(data.Take(100).ToList());
        }
    }
}
