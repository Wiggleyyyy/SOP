using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace page_with_products
{
    public class Product
    {
        public int Id { get; set; }
        public string name { get; set; }
        public Int64 ean { get; set; }
        public double price { get; set; }
    }
}
