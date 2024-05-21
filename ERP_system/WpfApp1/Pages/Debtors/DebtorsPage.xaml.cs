using ERP_system.API;
using ERP_system.Classes;
using ERP_system.DataModels;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
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

namespace ERP_system.Pages.Debtors
{
    /// <summary>
    /// Interaction logic for DebtorsPage.xaml
    /// </summary>
    public partial class DebtorsPage : Page
    {
        private Database _API = new Database();
        public Session _session = new Session();
        private Frame _mainFrame;

        public ObservableCollection<Debtor> Debtors = new ObservableCollection<Debtor>();

        public DebtorsPage(Frame mainFrame)
        {
            _API.InitializeConnectionString();
            InitializeComponent();
            _mainFrame = mainFrame;

            debtors_listview.ItemsSource = Debtors;

            List<Debtor> allDebtors = _API.GetAllDebtors();

            if (allDebtors.Count > 0)
            {
                foreach (var debtor in allDebtors)
                {
                    Debtors.Add(debtor);
                }
            }
        }

        private void home_button_Click(object sender, RoutedEventArgs e)
        {
            Home homePage = new Home(_mainFrame);
            homePage._session = _session;
            _mainFrame.Navigate(homePage);
        }

        private void create_button_Click(object sender, RoutedEventArgs e)
        {
            Popups.Debtors.debtorCreate debtorPopup = new Popups.Debtors.debtorCreate();
            debtorPopup.Show();
        }

        private void view_button_Click(object sender, RoutedEventArgs e)
        {
            if (debtors_listview.SelectedItems.Count == 1)
            {
                Debtor selectedDebtor = debtors_listview.SelectedItem as Debtor;
                
                Popups.Debtors.DebtorView debtorPopup = new Popups.Debtors.DebtorView(selectedDebtor);
                debtorPopup.Show();
            }
            else
            {
                MessageBox.Show("You need to select 1 debtor", "Information", MessageBoxButton.OK, MessageBoxImage.Information);
            }
        }
    }
}
