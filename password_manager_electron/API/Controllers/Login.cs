using Microsoft.AspNetCore.Mvc;
using System.Runtime.CompilerServices;

namespace API.Controllers
{
    [ApiController]
    [Route("/[controller]")]
    public class Login : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Test> Get([FromQuery] string username)
        {
            var tests = new List<Test>()
            {
                new Test { name = username},
            };
            return tests;
        }
    }

    public class Test
    {
        public string name { get; set; }
    }
}
