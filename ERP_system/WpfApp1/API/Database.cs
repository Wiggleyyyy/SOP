using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Intrinsics.Arm;
using System.Security.Permissions;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
using System.Security.Cryptography;
using System.Windows.Markup;
using System.Windows.Forms;
using ERP_system.Classes;
using ERP_system.DataModels;
using System.Numerics;
using static System.Windows.Forms.VisualStyles.VisualStyleElement.ListView;
using System.Reflection.Emit;
using System.Runtime.ConstrainedExecution;
using System.IO;
using System.Xml;

namespace ERP_system.API
{

    public class Database
    {
        public User user = new User();

        #region DatabaseConnection
        private string dbName = "ERP_system";
        private string dbDataSource = "localhost";
        private string dbUserId = "ConnectionUser";
        private string dbPassword = "AppConnection!";

        private string connectionString = "";
        private SqlConnection cnn;

        public void InitializeConnectionString()
        {
            connectionString = $@"Data Source={dbDataSource};Initial Catalog={dbName};User ID={dbUserId};Password={dbPassword};TrustServerCertificate=True";
        }
        #endregion DatabaseConnection 

        #region Login
        private string HashPassword(string password)
        {
            // Hash password using SHA256 and UTF8 encoding
            using (SHA256 sha256 = SHA256.Create())
            {
                byte[] hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
                return BitConverter.ToString(hashedBytes).Replace("-", "").ToLower();
            }
        }

        public bool Login(string username, string password)
        {
            try
            {

                cnn = new SqlConnection(connectionString);
                cnn.Open();

                string hashedPassword = password; //HashPassword(password);

                string query = "SELECT user_id FROM users WHERE user_username = @Username AND user_password = @Password";
                SqlCommand command = new SqlCommand(query, cnn);
                command.Parameters.AddWithValue("@Username", username);
                command.Parameters.AddWithValue("@Password", hashedPassword);

                object result = command.ExecuteScalar();

                if (result != DBNull.Value && result != null)
                {
                    // Set user_id for session
                    user.userID = (int)Convert.ToInt32(result);

                    cnn.Close();
                    return true;
                }
                else
                {
                    cnn.Close();
                    return false;
                }
            }
            catch (Exception ex)
            {
                // Database connection error

                // Handle if cnn isnt closed
                if (cnn.State != System.Data.ConnectionState.Closed)
                {
                    cnn.Close();
                }

                return false;
            }
        }
        #endregion Login

        #region GetData

       public string[] GetValuesFromIdAndType(int id, IdType type)
       {
            switch(type)
            {
                case IdType.IsoCountry:
                    {
                        try
                        {
                            cnn = new SqlConnection(connectionString);
                            cnn.Open();

                            string[] result = new string[3];

                            string query = "SELECT * FROM iso_country_code WHERE iso_country_code_id = @id";
                            SqlCommand command = new SqlCommand(query, cnn);
                            command.Parameters.AddWithValue("@id", id);

                            using (SqlDataReader reader = command.ExecuteReader())
                            {
                                while (reader.Read())
                                {
                                    result[0] = reader.GetInt32(reader.GetOrdinal("iso_country_code_id")).ToString();
                                    result[1] = reader.GetString(reader.GetOrdinal("country"));
                                    result[2] = reader.GetString(reader.GetOrdinal("iso_country_code"));
                                }
                            }

                            cnn.Close();

                            return result;
                        }
                        catch (Exception ex)
                        {
                            // Error

                            MessageBox.Show("Error getting country", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);

                            if (cnn.State != System.Data.ConnectionState.Closed)
                            {
                                cnn.Close();
                            }

                            return null;
                        }
                    }
                case IdType.PaymentTerm:
                    {
                        try
                        {
                            cnn = new SqlConnection(connectionString);
                            cnn.Open();

                            string[] result = new string[2];

                            string query = "SELECT * FROM payment_terms WHERE payment_term_id = @id";
                            SqlCommand command = new SqlCommand(query, cnn);
                            command.Parameters.AddWithValue("@id", id);

                            using (SqlDataReader reader = command.ExecuteReader())
                            {
                                while (reader.Read())
                                {
                                    result[0] = reader.GetInt32(reader.GetOrdinal("payment_term_id")).ToString();
                                    result[1] = reader.GetString(reader.GetOrdinal("payment_term_name"));
                                }
                            }

                            cnn.Close();

                            return result;
                        }
                        catch
                        {
                            // Error

                            MessageBox.Show("Error getting term", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);

                            if (cnn.State != System.Data.ConnectionState.Closed)
                            {
                                cnn.Close();
                            }

                            return null;
                        }
                    }
            }
            return null;
       }

        #region Debtors
        public List<Debtor> GetAllDebtors()
        {
            try
            {
                cnn = new SqlConnection(connectionString);
                cnn.Open();

                List<Debtor> allDebtors = new List<Debtor>();

                string query = "SELECT * FROM debtors";
                SqlCommand command = new SqlCommand(query, cnn);

                using (SqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        Debtor debtor = new Debtor
                        {
                            id = reader.GetInt32(reader.GetOrdinal("debtor_id")),
                            name = reader.GetString(reader.GetOrdinal("debtor_name")),
                            company_id = reader.GetInt32(reader.GetOrdinal("company_id")),
                            cvr = reader.GetString(reader.GetOrdinal("cvr_number")),
                            vat = reader.GetString(reader.GetOrdinal("vat_number")),
                            phone = reader.GetString(reader.GetOrdinal("phone")),
                            email = reader.GetString(reader.GetOrdinal("email")),
                            contact_person = reader.GetString(reader.GetOrdinal("contact_person")),
                            country_id = reader.GetInt32(reader.GetOrdinal("country_id")),
                            zipcode = reader.GetInt32(reader.GetOrdinal("zipcode")),
                            city = reader.GetString(reader.GetOrdinal("city")),
                            delivery_phone = reader.GetString(reader.GetOrdinal("delivery_phone")),
                            delivery_email = reader.GetString(reader.GetOrdinal("delivery_email")),
                            delivery_zipcode = reader.GetInt32(reader.GetOrdinal("delivery_zipcode")),
                            delivery_country_id = reader.GetInt32(reader.GetOrdinal("delivery_country_id")),
                            delivery_city = reader.GetString(reader.GetOrdinal("delivery_city")),
                            delivery_address = reader.GetString(reader.GetOrdinal("delivery_address")),
                            billing_address = reader.GetString(reader.GetOrdinal("billing_address")),
                            billing_contact = reader.GetString(reader.GetOrdinal("billing_contact")),
                            date_created = DateOnly.FromDateTime(reader.GetDateTime(reader.GetOrdinal("date_created"))),
                            debtor_note = reader.GetString(reader.GetOrdinal("debtor_note")),
                            billing_term_id = reader.GetInt32(reader.GetOrdinal("billing_term")),
                        };

                        if (debtor != null)
                        {
                            allDebtors.Add(debtor);
                        }
                    }
                }

                cnn.Close();

                return allDebtors;
            }
            catch (Exception ex)
            {
                // Error
                
                MessageBox.Show("Error getting debtors", "Errro", MessageBoxButtons.OK, MessageBoxIcon.Error);

                if (cnn.State != System.Data.ConnectionState.Closed)
                {
                    cnn.Close();
                }

                return null;
            }
        }

        //public Debtor GetDebtorFromId(int Id)
        //{
        //    try
        //    {
        //        cnn = new SqlConnection(connectionString);
        //        cnn.Open();

        //        Debtor debtor = new Debtor();

        //        string query = "SELECT * FROM debtors WHERE debtor_id = @id";
        //        SqlCommand command = new SqlCommand(query, cnn);
        //        command.Parameters.AddWithValue("@id", Id);

        //        using (SqlDataReader reader = command.ExecuteReader())
        //        {
        //            while (reader.Read())
        //            {
        //                debtor.id = reader.GetInt32(reader.GetOrdinal("debtor_id"));
        //                debtor.name = reader.GetString(reader.GetOrdinal("debtor_name"));
        //                debtor.company_id = reader.GetInt32(reader.GetOrdinal("company_id"));
        //                debtor.cvr = reader.GetString(reader.GetOrdinal("cvr_number"));
        //                debtor.vat = reader.GetString(reader.GetOrdinal("vat_number"));
        //                debtor.phone = reader.GetString(reader.GetOrdinal("phone"));
        //                debtor.email = reader.GetString(reader.GetOrdinal("email"));
        //                debtor.contact_person = reader.GetString(reader.GetOrdinal("contact_person"));
        //                debtor.country_id = reader.GetInt32(reader.GetOrdinal("country_id"));
        //                debtor.zipcode = reader.GetInt32(reader.GetOrdinal("zipcode"));
        //                debtor.city = reader.GetString(reader.GetOrdinal("city"));
        //                debtor.delivery_phone = reader.GetString(reader.GetOrdinal("delivery_phone"));
        //                debtor.delivery_email = reader.GetString(reader.GetOrdinal("delivery_email"));
        //                debtor.delivery_zipcode = reader.GetInt32(reader.GetOrdinal("delivery_zipcode"));
        //                debtor.delivery_country_id = reader.GetInt32(reader.GetOrdinal("delivery_country_id"));
        //                debtor.delivery_city = reader.GetString(reader.GetOrdinal("delivery_city"));
        //                debtor.delivery_address = reader.GetString(reader.GetOrdinal("delivery_address"));
        //                debtor.billing_address = reader.GetString(reader.GetOrdinal("billing_address"));
        //                debtor.billing_contact = reader.GetString(reader.GetOrdinal("billing_contact"));
        //                debtor.date_created = DateOnly.FromDateTime(reader.GetDateTime(reader.GetOrdinal("date_created")));
        //                debtor.debtor_note = reader.GetString(reader.GetOrdinal("debtor_note"));
        //                debtor.billing_term_id = reader.GetInt32(reader.GetOrdinal("billing_term"));
        //            }
        //        }

        //        cnn.Close();

        //        return debtor;
        //    }
        //    catch (Exception ex)
        //    {
        //        // Error

        //        MessageBox.Show("Error getting debtor", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);

        //        if (cnn.State != System.Data.ConnectionState.Closed)
        //        {
        //            cnn.Close();
        //        }

        //        return null;
        //    }
        //}
        #endregion Debtors

        #region Companies
        public List<Company> GetAllCompanies()
        {
            try
            {
                cnn = new SqlConnection(connectionString);
                cnn.Open();

                List<Company> companiesList = new List<Company>();

                string query = "SELECT * FROM companies";
                SqlCommand command = new SqlCommand(query, cnn);

                using (SqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        companiesList.Add(new Company
                        {
                            id = reader.GetInt32(reader.GetOrdinal("company_id")),
                            name = reader.GetString(reader.GetOrdinal("company_name")),
                            cvr_number = reader.GetString(reader.GetOrdinal("cvr_number")),
                            vat_number = reader.GetString(reader.GetOrdinal("vat_number")),
                            legal_form_id = reader.GetInt32(reader.GetOrdinal("legal_form_id")),
                            owner_name = reader.GetString(reader.GetOrdinal("owner_name")),
                            contact_person = reader.GetString(reader.GetOrdinal("contact_person")),
                            date_created = DateOnly.FromDateTime(reader.GetDateTime(reader.GetOrdinal("date_created"))),
                            address_1 = reader.GetString(reader.GetOrdinal("address_1")),
                            address_2 = reader.GetString(reader.GetOrdinal("address_2")),
                            country_id = reader.GetInt32(reader.GetOrdinal("country_id")),
                            zipcode = reader.GetInt32(reader.GetOrdinal("zipcode")),
                            city = reader.GetString(reader.GetOrdinal("city")),
                            delivery_address = reader.GetString(reader.GetOrdinal("delivery_address")),
                            delivery_country_id = reader.GetInt32(reader.GetOrdinal("delivery_country_id")),
                            delivery_zipcode = reader.GetInt32(reader.GetOrdinal("delivery_zipcode")),
                            delivery_city = reader.GetString(reader.GetOrdinal("delivery_city")),
                            delivery_phone = reader.GetString(reader.GetOrdinal("delivery_phone")),
                            delivery_email = reader.GetString(reader.GetOrdinal("delivery_email")),
                            company_phone = reader.GetString(reader.GetOrdinal("company_phone")),
                            company_email = reader.GetString(reader.GetOrdinal("company_email")),
                            website = reader.GetString(reader.GetOrdinal("website")),
                            status_id = reader.GetInt32(reader.GetOrdinal("status_id")),
                            billing_address = reader.GetString(reader.GetOrdinal("billing_address")),
                            billing_term_id = reader.GetInt32(reader.GetOrdinal("billing_term_id")),
                            billing_contact = reader.GetString(reader.GetOrdinal("billing_contact")),
                        });
                    }
                }

                cnn.Close();

                if (companiesList.Count > 0)
                {
                    return companiesList;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error getting companies", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);

                if (cnn.State != System.Data.ConnectionState.Closed)
                {
                    cnn.Close();
                }

                return null;
            }
        }
        #endregion Companies

        #region Countries
        public List<IsoCountry> GetAllIsoCountries()
        {
            try
            {
                cnn = new SqlConnection(connectionString);
                cnn.Open();

                List<IsoCountry> countriesList = new List<IsoCountry>();

                string query = "SELECT * FROM iso_country_code";
                SqlCommand command = new SqlCommand(query, cnn);

                using (SqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        countriesList.Add(new IsoCountry
                        {
                            id = reader.GetInt32(reader.GetOrdinal("iso_country_code_id")),
                            country = reader.GetString(reader.GetOrdinal("country")),
                            iso_code = reader.GetString(reader.GetOrdinal("iso_country_code")),
                        });
                    }
                }

                cnn.Close();

                if (countriesList.Count > 0)
                {
                    return countriesList;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error getting countries", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);

                if (cnn.State != System.Data.ConnectionState.Closed)
                {
                    cnn.Close();
                }

                return null;
            }
        }
        #endregion Countries

        #endregion GetData
    }

}
