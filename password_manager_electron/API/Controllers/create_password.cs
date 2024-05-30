using Microsoft.AspNetCore.Mvc;
using System.Runtime.CompilerServices;
using System.Security.Cryptography;
using System.Text;

namespace API.Controllers
{
    [ApiController]
    [Route("/password/[controller]")]
    public class create_password : ControllerBase
    {
        private database DB = new database();

        [HttpPost]
        public IActionResult Post([FromQuery] string site, [FromQuery] string username, [FromQuery] string password, [FromQuery] string currentUsername)
        {
            if (String.IsNullOrEmpty(site) || String.IsNullOrEmpty(username) || String.IsNullOrEmpty(password) || String.IsNullOrEmpty(currentUsername))
            {
                return BadRequest("Invalid input(s)");
            }

            _Login login = new _Login()
            {
                site = site,
                username = username,
                password = password,
                hashed_password = HashPassword(password),
            };

            bool insertSuccessful = DB.CreateLogin(login, currentUsername);

            if (insertSuccessful)
            {
                return StatusCode(200, "Login created");
            }
            else
            {
                return StatusCode(500, "An error occured while creating user");
            }
        }

        private string HashPassword(string password)
        {
            using (SHA256 sha256 = SHA256.Create())
            {
                byte[] hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
                return BitConverter.ToString(hashedBytes).Replace("-", "").ToLower();
            }
        }
    }
}
