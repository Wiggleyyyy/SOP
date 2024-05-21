using ERP_system.API;
using ERP_system.Classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using ERP_system;

namespace ERP_system.Pages
{
    /// <summary>
    /// Interaction logic for Page1.xaml
    /// </summary>
    public partial class Login : Page
    {
        private Database _API = new Database();
        public Session _session = new Session();
        private Frame _mainFrame;

        public Login(Frame mainframe)
        {
            _API.InitializeConnectionString();
            InitializeComponent();
            _mainFrame = mainframe;
        }

        private void login_button_Click(object sender, RoutedEventArgs e)
        {
            // Login
            string username = username_textbox.Text;
            string password = password_textbox.Password;

            bool login = _API.Login(username, password);

            if (login)
            {
                if (_API.user.userID != 0)
                {
                    _session.user.userID = _API.user.userID;
                }

                // Go to home page
                Home homePage = new Home(_mainFrame);
                homePage._session = _session;
                _mainFrame.Navigate(homePage);
            }
            else
            {
                MessageBox.Show("Could'nt login", "Information", MessageBoxButton.OK, MessageBoxImage.Information);
            }
        }
    }
}
