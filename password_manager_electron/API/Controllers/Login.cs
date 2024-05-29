using Microsoft.AspNetCore.Mvc;
using System.Runtime.CompilerServices;
using System.Security.Cryptography;
using System.Text;

namespace API.Controllers
{
    [ApiController]
    [Route("/[controller]")]
    public class Login : ControllerBase
    {
        private database DB = new database();

        [HttpPost]
        public IActionResult Get([FromQuery] string username, [FromQuery] string password)
        {
            if (String.IsNullOrEmpty(username) || String.IsNullOrEmpty(password))
            {
                return BadRequest("Invalid username and/or password");
            }

            User user = new User()
            {
                username = username,
                password = password,
                hashed_password = HashPassword(password),
            };

            bool loginSuccess = DB.Login(user);

            if (loginSuccess)
            {
                return StatusCode(200, "Logged in");
            }
            else
            {
                return Unauthorized("Invalid username or password");
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
