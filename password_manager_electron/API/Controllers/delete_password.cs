using Microsoft.AspNetCore.Mvc;
using System.Runtime.CompilerServices;
using System.Security.Cryptography;
using System.Text;

namespace API.Controllers
{
    [ApiController]
    [Route("/password/[controller]")]
    public class delete_password : ControllerBase
    {
        private database DB = new database();

        [HttpDelete]
        public IActionResult Delete([FromQuery] string user, [FromQuery] string site, [FromQuery] string username, [FromQuery] string password)
        {
            if (String.IsNullOrEmpty(user) || String.IsNullOrEmpty(site) || String.IsNullOrEmpty(username) || String.IsNullOrEmpty(password))
            {
                return BadRequest("Invalid input(s)");
            }

            _Login login = new _Login()
            {
                site = site,
                username = username,
                password = password,
                encrypted_password = EncryptPassword(password, "AES"),
            };

            bool isDeleted = DB.

            if (true)
            {
                return StatusCode(200, "Login deleted");
            }
            else
            {
                return StatusCode(500, "An error occured while deleting login");
            }
        } 

        private static byte[] GetAesKey(string key, int length = 32)
        {
            byte[] keyBytes = Encoding.UTF8.GetBytes(key);
            if (keyBytes.Length > length)
            {
                Array.Resize(ref keyBytes, length); // Truncate if too long
            }
            else if (keyBytes.Length < length)
            {
                Array.Resize(ref keyBytes, length); // Pad with zeros if too short
            }
            return keyBytes;
        }

        public static string EncryptPassword(string password, string key)
        {
            byte[] iv = new byte[16];
            byte[] array;

            byte[] keyBytes = GetAesKey(key);

            using (Aes aes = Aes.Create())
            {
                aes.Key = keyBytes;
                aes.IV = iv;

                ICryptoTransform encryptor = aes.CreateEncryptor(aes.Key, aes.IV);

                using (MemoryStream memoryStream = new MemoryStream())
                {
                    using (CryptoStream cryptoStream = new CryptoStream((Stream)memoryStream, encryptor, CryptoStreamMode.Write))
                    {
                        using (StreamWriter streamWriter = new StreamWriter((Stream)cryptoStream))
                        {
                            streamWriter.Write(password);
                        }

                        array = memoryStream.ToArray();
                    }
                }
            }

            return Convert.ToBase64String(array);
        }

    }
}
