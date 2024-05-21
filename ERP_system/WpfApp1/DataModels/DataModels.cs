using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Windows.Documents;
using System.Windows.Markup;

namespace ERP_system.DataModels
{
    public enum IdType
    {
        IsoCountry,
        PaymentTerm,
    }

    public class PaymentTerm
    {
        public int id { get; set; }
        public string name { get; set; }
    }

    public class IsoCountry
    {
        public int id { get; set; }
        public string country { get; set; }
        public string iso_code { get; set; }
    }

    public class Company
    {
        public int id { get; set; }
        public string name { get; set; }
        public string cvr_number { get; set; }
        public string vat_number { get; set; }
        public int legal_form_id { get; set; }
        public string owner_name { get; set; }
        public string contact_person { get; set; }
        public DateOnly date_created { get; set; }
        public string address_1 { get; set; }
        public string address_2 { get; set; }
        public int country_id { get; set; }
        public int zipcode { get; set; }
        public string city { get; set; }
        public string delivery_address { get; set; }
        public int delivery_country_id { get; set; }
        public int delivery_zipcode { get; set; }
        public string delivery_city { get; set; }
        public string delivery_phone { get; set; }
        public string delivery_email { get; set; }
        public string company_phone { get; set; }
        public string company_email { get; set; }
        public string website { get; set; }
        public int status_id { get; set; }
        public string billing_address { get; set; }
        public int billing_term_id { get; set; }
        public string billing_contact { get; set; }
    }

    public class Debtor
    {
        public int id { get; set; }
        public string name { get; set; }
        public int company_id { get; set; }
        public string cvr { get; set; }
        public string vat { get; set; }
        public string phone { get; set; }
        public string email { get; set; }
        public int country_id { get; set; }
        public string contact_person { get; set; }
        public int zipcode { get; set; }
        public string city { get; set; }
        public string delivery_phone { get; set; }
        public string delivery_email { get; set; }
        public int delivery_country_id { get; set; }
        public int delivery_zipcode { get; set; }
        public string delivery_city { get; set; }
        public string delivery_address { get; set; }
        public string billing_address { get; set; }
        public string billing_contact { get; set; }
        public int billing_term_id { get; set; }
        public DateOnly date_created { get; set; }
        public string debtor_note { get; set; }
    }
}
