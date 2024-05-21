using ERP_system.API;
using ERP_system.Classes;
using ERP_system.Pages;
using System;
using System.Collections.Generic;
using System.Diagnostics.Eventing.Reader;
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

namespace ERP_system
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        private Database _API = new Database();
        public Session _session = new Session();

        public MainWindow()
        {
            _API.InitializeConnectionString();
            InitializeComponent();

            Login loginPage = new Login(MainFrame);
            MainFrame.Navigate(loginPage);
        }

        //private void login_button_Click(object sender, RoutedEventArgs e)
        //{
        //    // Login
        //    string username = username_textbox.Text;
        //    string password = password_textbox.Password;

        //    bool login = _API.Login(username, password);

        //    if (login)
        //    {
        //        if (_API.user.userID != 0)
        //        {
        //            _Session.user.userID = _API.user.userID;
        //        }

        //        MessageBox.Show("logged in");

        //        // Go to home page
        //        Home homePage = new Home();
        //        MainFrame.Navigate(homePage);
        //    }
        //    else
        //    {
        //        MessageBox.Show("Could'nt login", "Information", MessageBoxButton.OK, MessageBoxImage.Information);
        //    }
        //}
    }
}
