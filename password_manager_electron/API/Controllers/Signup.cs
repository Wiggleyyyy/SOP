using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Runtime.CompilerServices;
using System.Security.Cryptography;
using System.Text;

namespace API.Controllers
{
    [Route("api/[controller]/create_user")]
    [ApiController]
    public class Signup : ControllerBase
    {
        private database DB = new database();

        [HttpPost]
        public async Task<IActionResult> Post([FromQuery] string username, [FromQuery] string password)
        {
            User user = new User()
            {
                username = username,
                password = password,
            };

            if (String.IsNullOrEmpty(user.username) || String.IsNullOrEmpty(user.password))
            {
                return BadRequest("Invalid username and/or password");
            }

            user.hashed_password = HashPassword(user.password);

            bool isSuccess = DB.Signup(user);
            if (isSuccess)
            {
                return StatusCode(200, "Account created");
            }
            else
            {
                return StatusCode(500, "An error occured while creating the user");
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
