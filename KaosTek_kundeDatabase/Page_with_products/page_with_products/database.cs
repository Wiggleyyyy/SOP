using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
using Microsoft.Data.SqlClient;
using System.ComponentModel;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;

namespace page_with_products
{
    public class database
    {
        private string dbName = "KaosTek";
        private string dbDataSource = "localhost";
        private string dbUserID = "ConnectionUser";
        private string dbPassword = "AppConnection!";

        private string dbConnectionString = "";
        private SqlConnection cnn;

        public List<Product> GetProducts()
        {
            List<Product> products = new List<Product>();

            try
            {
                // Open connection to database
                dbConnectionString = $@"Data Source={dbDataSource};Initial Catalog={dbName};User ID={dbUserID};Password={dbPassword};TrustServerCertificate=True;";
                cnn = new SqlConnection(dbConnectionString);
                cnn.Open();

                // Query and reading the query
                string query = "SELECT * FROM products";
                SqlCommand sqlCommand = new SqlCommand(query, cnn);
                SqlDataReader sqlReader = sqlCommand.ExecuteReader();
                
                while (sqlReader.Read())
                {
                    // Adding products to list
                    Product product = new Product();

                    product.Id = sqlReader.GetInt32(0);
                    product.name = sqlReader.GetString(1);
                    if (!sqlReader.IsDBNull(2))
                    {
                        product.ean = sqlReader.GetInt32(2);
                    }
                    else
                    {
                        product.ean = 123456789000;
                    }

                    decimal tempPrice = Math.Round(sqlReader.GetDecimal(3), 2);
                    product.price = Convert.ToDouble(tempPrice);

                    if (product != null)
                    {
                        products.Add(product);
                    }
                }

                sqlReader.Close();
            }
            catch (Exception ex)
            {
                // Error handling
                MessageBox.Show("Kunne ikke oprette forbindelse til databasen");
            }
            finally
            {
                if (cnn.State == System.Data.ConnectionState.Open)
                {
                    // Close connection if open
                    cnn.Close();
                }
            }

            return products;
        }
    }
}
