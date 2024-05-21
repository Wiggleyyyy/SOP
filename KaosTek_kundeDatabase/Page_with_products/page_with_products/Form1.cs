namespace page_with_products
{
    public partial class Form1 : Form
    {
        private database customApi = new database();

        public Form1()
        {
            InitializeComponent();

        }

        private void btnLoadProducts_Click(object sender, EventArgs e)
        {
            List<Product> productsToSort = new List<Product>();
            productsToSort = customApi.GetProducts();

            if (productsToSort.Count > 0)
            {
                List<Product> SortedProducts = productsToSort.OrderBy(x => x.price).ToList();

                foreach (var product in SortedProducts)
                {
                    ListViewItem item = new ListViewItem(product.Id.ToString());

                    item.SubItems.Add(product.name).Text = product.name;
                    item.SubItems.Add(product.ean.ToString());
                    item.SubItems.Add(product.price.ToString());

                    if (item != null)
                    {
                        listViewProducts.Items.Add(item);
                    }
                }
            }
        }

        private void btnEmptyList_Click(object sender, EventArgs e)
        {
            listViewProducts.Items.Clear();
        }
    }
}