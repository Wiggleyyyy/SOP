using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics.CodeAnalysis;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Security.Cryptography;

namespace SimplePasswordManager
{
    public partial class createForm : Form
    {
        public createForm()
        {
            InitializeComponent();
        }

        private void createButton_Click(object sender, EventArgs e)
        {
            List<string> errorProperties = new List<string>();
            List<Login> loginList = new List<Login>();

            Login login = new Login();

            //Check inputs and set values for logins
            if (!String.IsNullOrEmpty(siteText.Text))
            {
                login.Site = siteText.Text;
            }
            else
            {
                errorProperties.Add("Site");
            }
            if (!String.IsNullOrEmpty(usernameText.Text))
            {
                login.Username = usernameText.Text;
            }
            else
            {
                errorProperties.Add("Username");
            }
            if (!String.IsNullOrEmpty(emailText.Text))
            {
                login.Email = emailText.Text;
            }
            else
            {
                errorProperties.Add("Email");
            }
            if (!String.IsNullOrEmpty(passwordText.Text))
            {
                login.Password = passwordText.Text;
            }
            else
            {
                errorProperties.Add("Password");
            }

            //Add check for values, like if contains "@" or ".com"
            if (errorProperties.Count > 0)
            {
                MessageBox.Show($"Error with follwing fields: {String.Join(",", errorProperties)}", "Invalid or missing fields", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }

            string dirPath = @"C:\Password_manager";
            string filePath = @"C:\Password_manager\data.json";

            //Create directory if doesnt exist
            if (!Directory.Exists(dirPath))
            {
                Directory.CreateDirectory(dirPath);
            }
            //Create file if doesnt exist
            if (!File.Exists(filePath))
            {
                File.Create(filePath).Close();
            }

            //Get logins into loginList
            string fileContent = File.ReadAllText(filePath);

            if (!string.IsNullOrWhiteSpace(fileContent))
            {
                try
                {
                    if (fileContent.TrimStart().StartsWith("["))
                    {
                        loginList = JsonConvert.DeserializeObject<List<Login>>(fileContent);
                    }
                    else
                    {
                        Login singleLogin = JsonConvert.DeserializeObject<Login>(fileContent);
                        loginList = new List<Login> { singleLogin };
                    }
                }
                catch (JsonException jsonEx)
                {
                    MessageBox.Show($"Error deserializing the file content: {jsonEx.Message}", "Deserialization Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    return;
                }
            }
            else
            {
                loginList = new List<Login>();
            }


            //using (StreamReader reader = new StreamReader(filePath))
            //{
            //    string json = reader.ReadToEnd();
            //    if (!String.IsNullOrEmpty(json))
            //    {
            //        loginList = JsonConvert.DeserializeObject<List<Login>>(json);
            //    }
            //}

            if (loginList.Contains(login))
            {
                MessageBox.Show($"Login to site {login.Site} already exists, remove or edit stored login", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            else
            {
                loginList.Add(login);
            }

            string loginAsJson = JsonConvert.SerializeObject(loginList);
            File.WriteAllText(filePath, loginAsJson);
            MessageBox.Show("Login created", "Success", MessageBoxButtons.OK, MessageBoxIcon.Information);
        }

        private void generatePasswordButton_Click(object sender, EventArgs e)
        {
            int passwordLength = 12;
            const string validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()";
            StringBuilder res = new StringBuilder();
            using (RNGCryptoServiceProvider rng = new RNGCryptoServiceProvider())
            {
                byte[] uintBuffer = new byte[sizeof(uint)];

                while (passwordLength-- > 0)
                {
                    rng.GetBytes(uintBuffer);
                    uint num = BitConverter.ToUInt32(uintBuffer, 0);
                    res.Append(validChars[(int)(num % (uint)validChars.Length)]);
                }
            }

            passwordText.Text = res.ToString();
        }

        private void viewPasswordButton_Click(object sender, EventArgs e)
        {
            if (passwordText.PasswordChar == '\0')
            {
                passwordText.PasswordChar = '*';
            }
            else
            {
                passwordText.PasswordChar = '\0';
            }
        }
    }
}
