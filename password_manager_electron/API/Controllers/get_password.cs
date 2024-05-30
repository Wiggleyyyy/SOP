using Microsoft.AspNetCore.Mvc;
using System.Runtime.CompilerServices;
using System.Security.Cryptography;
using System.Text;

namespace API.Controllers
{
    [ApiController]
    [Route("/password/[controller]")]
    public class get_password : ControllerBase
    {
        private database DB = new database();

        [HttpGet]
        public ActionResult<List<_Login>> GetLogins([FromQuery] string username)
        {
            if (String.IsNullOrEmpty(username))
            {
                return BadRequest("Error with fetching username");
            }

            List<_Login> loginsList = DB.GetLoginsFromUser(username);

            if (loginsList != null)
            {
                return loginsList;
            }
            else
            {
                return BadRequest("Error getting passwords");
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
