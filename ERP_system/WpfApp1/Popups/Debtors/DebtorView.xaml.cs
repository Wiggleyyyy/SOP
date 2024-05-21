using ERP_system.API;
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

namespace ERP_system.Popups.Debtors
{
    /// <summary>
    /// Interaction logic for DebtorView.xaml
    /// </summary>
    public partial class DebtorView : Window
    {
        Database _API = new Database();

        public ObservableCollection<Debtor> debtors = new ObservableCollection<Debtor>();
        public ObservableCollection<IsoCountry> countries = new ObservableCollection<IsoCountry>();
        public ObservableCollection<IsoCountry> deliveryCountries = new ObservableCollection<IsoCountry>();
        public ObservableCollection<PaymentTerm> billingTerms = new ObservableCollection<PaymentTerm>();

        public DebtorView(Debtor selectedDebtor)
        {
            _API.InitializeConnectionString();
            InitializeComponent();

            info_listview.ItemsSource = debtors;
            delivery_listview.ItemsSource = debtors;
            billing_listview.ItemsSource = debtors;

            country_listview.ItemsSource = countries;
            deliveryCountry_listview.ItemsSource = deliveryCountries;
            billingTerm_listview.ItemsSource = billingTerms;

            debtors.Add(selectedDebtor);

            string[] countryArray = _API.GetValuesFromIdAndType(selectedDebtor.country_id, IdType.IsoCountry);
            IsoCountry countryForList = new IsoCountry
            {
                id = (int)Convert.ToInt32(countryArray[0]),
                country = countryArray[1],
                iso_code = countryArray[2],
            };
            countries.Add(countryForList);

            string[] deliveryCountryArray = _API.GetValuesFromIdAndType(selectedDebtor.delivery_country_id, IdType.IsoCountry);
            IsoCountry deliveryCountryForList = new IsoCountry
            {
                id = (int)Convert.ToInt32(deliveryCountryArray[0]),
                country = deliveryCountryArray[1],
                iso_code = deliveryCountryArray[2],
            };
            deliveryCountries.Add(deliveryCountryForList);

            string[] billingTermArray = _API.GetValuesFromIdAndType(selectedDebtor.billing_term_id, IdType.PaymentTerm);
            PaymentTerm billingTermForList = new PaymentTerm
            {
                id = (int)Convert.ToInt32(billingTermArray[0]),
                name = billingTermArray[1],
            };
            billingTerms.Add(billingTermForList);
        }
    }
}
