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

namespace SimplePasswordManager
{
    public partial class passwords : Form
    {
        public passwords()
        {
            InitializeComponent();

            passwordList.View = View.Details;
            passwordList.FullRowSelect = true;
            passwordList.GridLines = true;

            passwordList.Columns.Add("Site", 150);
            passwordList.Columns.Add("Username", 150);
            passwordList.Columns.Add("Email", 200);
            passwordList.Columns.Add("Password", 150);

            AddData();
        }

        private void AddData()
        {
            // Get data 
            string dirPath = @"C:\Password_manager";
            string filePath = @"C:\Password_manager\data.json";

            // Check if directory & file exists
            if (!Directory.Exists(dirPath))
            {
                MessageBox.Show("Create a login before you can view logins", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            if (!File.Exists(filePath))
            {
                MessageBox.Show("Create a login before you can view logins", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }

            // Read file
            string fileContent = File.ReadAllText(filePath);

            List<Login> loginList = new List<Login>();
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
                MessageBox.Show("Can't read logins, try creating new logins", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }

            // Populate the ListView with login data
            foreach (var login in loginList)
            {
                string[] row = { login.Site, login.Username, login.Email, login.Password };
                var listViewItem = new ListViewItem(row);
                passwordList.Items.Add(listViewItem);
            }
        }

        private void deleteButton_Click(object sender, EventArgs e)
        {
            // Check if an item is selected
            if (passwordList.SelectedItems.Count > 0)
            {
                // Get the selected item
                var selectedItem = passwordList.SelectedItems[0];
                string site = selectedItem.SubItems[0].Text;
                string username = selectedItem.SubItems[1].Text;

                // Confirm delete action
                DialogResult dialogResult = MessageBox.Show($"Are you sure you want to delete the login for {site}?", "Confirm Delete", MessageBoxButtons.YesNo, MessageBoxIcon.Warning);

                if (dialogResult == DialogResult.Yes)
                {
                    // Remove the item from the ListView
                    passwordList.Items.Remove(selectedItem);

                    // Update the JSON data
                    DeleteFromJsonFile(site, username);
                }
            }
            else
            {
                MessageBox.Show("Please select a login to delete.", "No Selection", MessageBoxButtons.OK, MessageBoxIcon.Information);
            }
        }

        private void DeleteFromJsonFile(string site, string username)
        {
            string filePath = @"C:\Password_manager\data.json";

            // Read the existing data from the JSON file
            if (File.Exists(filePath))
            {
                string fileContent = File.ReadAllText(filePath);
                List<Login> loginList = new List<Login>();

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

                        // Find the login to delete
                        var loginToDelete = loginList.FirstOrDefault(l => l.Site == site && l.Username == username);
                        if (loginToDelete != null)
                        {
                            loginList.Remove(loginToDelete);

                            // Save the updated list back to the JSON file
                            string updatedJson = JsonConvert.SerializeObject(loginList, Formatting.Indented);
                            File.WriteAllText(filePath, updatedJson);
                        }
                    }
                    catch (JsonException jsonEx)
                    {
                        MessageBox.Show($"Error updating the file content: {jsonEx.Message}", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    }
                }
            }
        }

    }
}
