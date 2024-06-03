using API.Controllers;
using Swashbuckle.AspNetCore.SwaggerGen;
using System.Data.SqlClient;
using System.Runtime.Intrinsics.Arm;
using System;
using System.IO;
using System.Security.Cryptography;
using System.Text;

namespace API
{
    public class database
    {
        // Set connection string
        private readonly string connectionString = "Data Source=localhost;Initial Catalog=password_manager;User ID=ConnectionUser;Password=AppConnection!;Integrated Security=True";
        private SqlConnection cnn;

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

        public static string DecryptPassword(string cipherText, string key)
        {
            byte[] iv = new byte[16];
            byte[] buffer = Convert.FromBase64String(cipherText);

            byte[] keyBytes = GetAesKey(key);

            using (System.Security.Cryptography.Aes aes = System.Security.Cryptography.Aes.Create())
            {
                aes.Key = keyBytes;
                aes.IV = iv;

                ICryptoTransform decryptor = aes.CreateDecryptor(aes.Key, aes.IV);

                using (MemoryStream memoryStream = new MemoryStream(buffer))
                {
                    using (CryptoStream cryptoStream = new CryptoStream((Stream)memoryStream, decryptor, CryptoStreamMode.Read))
                    {
                        using (StreamReader streamReader = new StreamReader((Stream)cryptoStream))
                        {
                            return streamReader.ReadToEnd();
                        }
                    }
                }
            }
        }

        public bool DeleteLogin(string username, _Login login)
        {
            try
            {
                // Open connection
                cnn = new SqlConnection(connectionString);
                cnn.Open();

                // Get user_id from username
                string query = "SELECT * FROM users WHERE email = @username";
                SqlCommand command = new SqlCommand(query, cnn);
                command.Parameters.AddWithValue("@username", username);
                SqlDataReader reader = command.ExecuteReader();
                if (reader.HasRows)
                {
                    int userID = 0;
                    while (reader.Read())
                    {
                        userID = reader.GetInt32(reader.GetOrdinal("user_id"));
                    }
                    reader.Close();

                    // Delete login
                    query = "DELETE FROM logins WHERE site = @site AND username = @username AND password = @password AND user_id = @user_id";
                    command = new SqlCommand(query, cnn);
                    command.Parameters.AddWithValue("@site", login.site);
                    command.Parameters.AddWithValue("@username", login.username);
                    command.Parameters.AddWithValue("@password", login.password);
                    command.Parameters.AddWithValue("@user_id", userID);
                    int rowsAffected = command.ExecuteNonQuery();

                    cnn.Close();

                    // Return true if rowsAffected > 0
                    return rowsAffected > 0;
                }
                else
                {
                    //here

                    return false;
                }
            catch
            {

            }
        }

        public List<_Login> GetLoginsFromUser(string username)
        {
            try
            {
                // Open connection
                cnn = new SqlConnection(connectionString);
                cnn.Open();

                // Get user_id from current user
                string query = "SELECT * FROM users WHERE email = @username";
                SqlCommand command = new SqlCommand(query, cnn);
                command.Parameters.AddWithValue("@username", username);
                SqlDataReader reader = command.ExecuteReader();
                if (reader.HasRows)
                {
                    int userID = 0;
                    while (reader.Read())
                    {
                        userID = reader.GetInt32(reader.GetOrdinal("user_id"));
                    }
                    reader.Close();

                    // Get logins for user
                    query = "SELECT * FROM logins WHERE user_id = @user_id";
                    command = new SqlCommand(query, cnn);
                    command.Parameters.AddWithValue("@user_id", userID);
                    reader = command.ExecuteReader();
                    if (reader.HasRows)
                    {
                        List<_Login> loginsList = new List<_Login>();

                        while (reader.Read())
                        {
                            _Login login = new _Login()
                            {
                                site = reader.GetString(reader.GetOrdinal("site")),
                                username = reader.GetString(reader.GetOrdinal("username")),
                                encrypted_password = reader.GetString(reader.GetOrdinal("password")),
                            };

                            login.password = DecryptPassword(login.encrypted_password, "AES");

                            if (login != null)
                            {
                                loginsList.Add(login);
                            }
                        }
                        reader.Close();

                        // Return logins list if not empty
                        if (loginsList.Count > 0)
                        {
                            return loginsList;
                        }
                        else
                        {
                            // Return null if list is empty
                            return null;
                        }
                    }
                    else
                    {
                        // Return null if nothing is found
                        return null;
                    }
                }
                else
                {
                    // return null if  nothing is found
                    return null;
                }
            }
            catch (Exception ex)
            {
                // Close connection if not closed
                if (cnn.State != System.Data.ConnectionState.Closed)
                {
                    cnn.Close();
                }

                // Return null
                return null;
            }
        }

        public bool CreateLogin(_Login login, string currentUsername)
        {
            try
            {
                // Open connection
                cnn = new SqlConnection(connectionString);
                cnn.Open();

                // Get user_id from current user
                string query = "SELECT * FROM users WHERE email = @username";
                SqlCommand command = new SqlCommand(query, cnn);
                command.Parameters.AddWithValue("@username", currentUsername);
                SqlDataReader reader = command.ExecuteReader();
                if (reader.HasRows)
                {
                    int userID = 0;
                    while (reader.Read())
                    {
                        userID = reader.GetInt32(reader.GetOrdinal("user_id"));
                    }
                    reader.Close();

                    // Query to insert login
                    query = "INSERT INTO logins (site, username, password, user_id) VALUES (@site, @username, @password, @user_id)";
                    command = new SqlCommand(query, cnn);
                    command.Parameters.AddWithValue("@site", login.site);
                    command.Parameters.AddWithValue("@username", login.username);
                    command.Parameters.AddWithValue("@password", login.encrypted_password);
                    command.Parameters.AddWithValue("@user_id", userID);
                    int rowsAffected = command.ExecuteNonQuery();

                    // Close connection
                    cnn.Close();

                    // Return true if inserted
                    return rowsAffected > 0;
                }
                else
                {
                    // Return false incase of user_id not found
                    return false;
                }
            }
            catch (Exception ex)
            {


                // Close connection if not closed
                if (cnn.State != System.Data.ConnectionState.Closed)
                {
                    cnn.Close();
                }

                // Return flase incase of error
                return false;
            }
        }

        public bool Login(User user)
        {
            try
            {
                // Open connections
                cnn = new SqlConnection(connectionString);
                cnn.Open();

                // Check if user exists
                string query = "SELECT * FROM users WHERE email = @username AND password = @password";
                SqlCommand command = new SqlCommand(query, cnn);
                command.Parameters.AddWithValue("@username", user.username);
                command.Parameters.AddWithValue("@password", user.hashed_password);
                SqlDataReader reader = command.ExecuteReader();
                bool hasRows = reader.HasRows;


                // Close connection
                cnn.Close();

                // Return true if user exists
                return hasRows;
            }
            catch (Exception ex)
            {
                // Close connection if not closed
                if (cnn.State != System.Data.ConnectionState.Closed)
                {
                    cnn.Close();
                }

                return false;
            }
        }

        public bool Signup(User user)
        {
            try
            {
                // Open connection
                cnn = new SqlConnection(connectionString);
                cnn.Open();

                // Check if username exists
                string query = "SELECT COUNT (*) FROM users WHERE email = @username";
                SqlCommand command = new SqlCommand(query, cnn);
                command.Parameters.AddWithValue("@username", user.username);
                int existingUsersCount = (int)command.ExecuteScalar();

                // Return false if user exists
                if (existingUsersCount > 0)
                {
                    return false;
                }

                // Create user
                query = "INSERT INTO users (email, password) VALUES(@username, @password)";
                command = new SqlCommand(query, cnn);
                command.Parameters.AddWithValue("@username", user.username);
                command.Parameters.AddWithValue("@password", user.hashed_password);
                int rowsAffected = command.ExecuteNonQuery();

                cnn.Close();

                return rowsAffected > 0;
            }
            catch (Exception ex)
            {
                // Close connection if not closed
                if (cnn.State != System.Data.ConnectionState.Closed)
                {
                    cnn.Close();
                }

                return false;
            }
        }
    }
}
