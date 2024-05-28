using API.Controllers;
using Swashbuckle.AspNetCore.SwaggerGen;
using System.Data.SqlClient;

namespace API
{
    public class database
    {
        // Set connection string
        private readonly string connectionString = "Data Source=localhost;Initial Catalog=password_manager;User ID=ConnectionUser;Password=AppConnection!;Integrated Security=True";
        private SqlConnection cnn;

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
