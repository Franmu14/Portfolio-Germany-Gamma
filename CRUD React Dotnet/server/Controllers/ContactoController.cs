using Microsoft.AspNetCore.Mvc;
using System.Diagnostics.Contracts;

namespace CRUDReactDotnetFIRST.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactoController : Controller
    {
        private readonly DBCRUDONEContext _dbcontext;
        public ContactoController(DBCRUDONEContext context) { 
        
        _dbcontext = context;

        }

        [HttpGet]
        [Route("Lista")]

        public async Task<IActionResult> Lista()
        {
            List<Contacto> lista = await _dbcontext.Contactos.OrderByDescending(char => char.IdContacto).ToListAsync();

            return StatusCode(StatusCodes.Status200OK, lista);
        }

        [HttpPost]
        [Route("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] ContactoController request)
        {
            await _dbcontext.Contactos.AddAsync(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpPut]
        [Route("Editar")]
        public async Task<IActionResult> Editar([FromBody] Contacto request)
        {

            _dbcontext.Contactos.Update(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");

        }

        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> Eliminar(int id)
        {

            Contacto contacto = _dbcontext.Contactos.Find(id);

            _dbcontext.Contactos.Remove(contacto);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }
    }
}


