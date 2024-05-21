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
using ERP_system.Pages.Debtors;

namespace ERP_system.Pages
{
    /// <summary>
    /// Interaction logic for Home.xaml
    /// </summary>
    public partial class Home : Page
    {
        private Database _API = new Database();
        public Session _session = new Session();
        private Frame _mainframe;

        public Home(Frame mainframe)
        {
            _API.InitializeConnectionString();
            InitializeComponent();
            _mainframe = mainframe;
        }

        private void debtors_button_Click(object sender, RoutedEventArgs e)
        {
            //Go to debtors page
            DebtorsPage debtorsPage = new DebtorsPage(_mainframe);
            debtorsPage._session = _session;
            _mainframe.Navigate(debtorsPage);
        }
    }
}
