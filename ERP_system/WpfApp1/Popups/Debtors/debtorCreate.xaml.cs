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
using System.Windows.Shapes;

namespace ERP_system.Popups.Debtors
{
    /// <summary>
    /// Interaction logic for debtorCreate.xaml
    /// </summary>
    public partial class debtorCreate : Window
    {
        private Database _API = new Database();

        private List<IsoCountry> countries = new List<IsoCountry>();
        private List<Company> companies = new List<Company>();

        public debtorCreate()
        {
            InitializeComponent();
            _API.InitializeConnectionString();

            countries = _API.GetAllIsoCountries();
            if (countries != null && countries.Count > 0)
            {
                foreach (IsoCountry country in countries)
                {
                    country_combobox.Items.Add($"{country.country} | {country.iso_code}");
                    deliveryCountry_combobox.Items.Add($"{country.country} | {country.iso_code}");
                }
            }

            companies = _API.GetAllCompanies();
            if (companies != null && companies.Count > 0)
            {
                foreach(Company company in companies)
                {
                    company_combobox.Items.Add($"{company.name} | {company.id}");
                }
            }
        }
    }
}
