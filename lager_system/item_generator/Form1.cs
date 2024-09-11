using System.Runtime.CompilerServices;
using System.IO;

namespace item_generator
{
    public partial class form1 : Form
    {
        public List<Item> Items = new List<Item>();

        public form1()
        {
            InitializeComponent();

            #region SetUpListView
            // Set up listview
            itemsList.Columns.Add("Name", 200);
            itemsList.Columns.Add("EAN", 200);
            itemsList.Columns.Add("Price", 200);
            itemsList.Columns.Add("Quantity", 200);
            itemsList.View = View.Details;
            itemsList.FullRowSelect = true;
            #endregion SetUpListView
        }

        #region InputHandlers
        private void eanText_KeyPress(object sender, KeyPressEventArgs e)
        {
            if (!char.IsControl(e.KeyChar) && !char.IsDigit(e.KeyChar))
            {
                e.Handled = true;
            }
        }

        private void priceText_KeyPress(object sender, KeyPressEventArgs e)
        {
            if (!Char.IsControl(e.KeyChar) && !Char.IsDigit(e.KeyChar) && e.KeyChar.ToString() != ".")
            {
                e.Handled = true;
            }
        }

        private void qtyText_KeyPress(object sender, KeyPressEventArgs e)
        {
            if (!char.IsControl(e.KeyChar) && !char.IsDigit(e.KeyChar))
            {
                e.Handled = true;
            }
        }
        #endregion InputHandlers

        private void autoButton_Click(object sender, EventArgs e)
        {
            #region CreateLists
            // Name list
            List<string> nameList = new List<string>()
            {
                "Monster",
                "Chocolate",
                "M&Ms",
                "Eggs",
                "Cola",
                "Milk",
                "Bread",
            };

            // Create EAN list
            int[] digits = new int[] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
            List<long> eanList = new List<long>();
            for (int i = 0; i < 7; i++)
            {
                string randomEan = "";
                for (int x = 0; x <= 13; x++)
                {
                    Random rnd = new Random();
                    int randomIndex = rnd.Next(digits.Length);
                    string randomDigit = digits[randomIndex].ToString();
                    randomEan = $"{randomEan}{randomDigit}";
                }

                long ean = long.Parse(randomEan);
                eanList.Add(ean);
            }

            if (eanList.Count < 1)
            {
                MessageBox.Show("error, EAN list empty");
            }

            // Price list
            List<double> priceList = new List<double>()
            {
                9.95,
                14.95,
                19.95,
                4.95,
                24.95,
            };
            #endregion CreateLists

            #region SetItemValues
            Item item = new Item();

            // Get and set the name
            Random rndName = new Random();
            int rndIndex1 = rndName.Next(nameList.Count);
            item.item_name = nameList[rndIndex1];

            // Get and set the name
            Random rndEan = new Random();
            int rndIndex2 = rndName.Next(eanList.Count);
            item.item_ean = eanList[rndIndex2];

            // Get price
            Random rndPrice = new Random();
            int rndIndex3 = rndPrice.Next(priceList.Count);
            item.item_price = priceList[rndIndex3];

            // Get quantity
            Random rndQuantity = new Random();
            item.item_qty = rndQuantity.Next(100);
            #endregion SetItemValues

            #region SetDisplay
            nameText.Text = item.item_name.ToString();
            eanText.Text = item.item_ean.ToString();
            priceText.Text = item.item_price.ToString();
            qtyText.Text = item.item_qty.ToString();
            #endregion SetDisplay
        }

        private void addButton_Click(object sender, EventArgs e)
        {
            #region ErrorHandlingAndSettingItemValues
            // Handle errors
            List<String> errorProperties = new List<String>();
            //Set item values
            Item item = new Item();
            if (!String.IsNullOrEmpty(nameText.Text))
            {
                item.item_name = nameText.Text;
            }
            else
            {
                // Handle errors
                errorProperties.Add("Name");
            }
            if (!String.IsNullOrEmpty(eanText.Text) && eanText.Text.Length != 13)
            {
                item.item_ean = long.Parse(eanText.Text);
            }
            else
            {
                // Handle errors
                errorProperties.Add("EAN");
            }
            if (!String.IsNullOrEmpty(priceText.Text))
            {
                item.item_price = double.Parse(priceText.Text);
            }
            else
            {
                // Handle errors
                errorProperties.Add("Price");
            }
            if (!String.IsNullOrEmpty(qtyText.Text))
            {
                item.item_qty = Convert.ToInt32(qtyText.Text);
            }
            else
            {
                // Handle errors
                errorProperties.Add("Quantity");
            }

            // Handle errors
            if (errorProperties.Count > 0)
            {
                string errorFields = String.Join(", ", errorProperties);
                MessageBox.Show($"Error with following fields: {errorFields}", "Invalid or missing fields", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            #endregion ErrorHandlingAndSettingItemValues

            #region ConvertToListItem
            ListViewItem lvItem = new ListViewItem(item.item_name);
            lvItem.SubItems.Add(item.item_ean.ToString());
            lvItem.SubItems.Add(item.item_price.ToString());
            lvItem.SubItems.Add(item.item_qty.ToString());

            Items.Add(item);
            itemsList.Items.Add(lvItem);
            #endregion ConvertToListItem
        }

        private void deleteButton_Click(object sender, EventArgs e)
        {
            #region DeleteOperation
            if (itemsList.SelectedItems.Count == 1)
            {
                foreach (ListViewItem lvItem in itemsList.SelectedItems)
                {
                    // Delete in both public list and listview
                    string itemName = lvItem.SubItems[0].Text;
                    Item item = Items.Where(x => x.item_name == itemName).FirstOrDefault();
                    Items.Remove(item);
                    itemsList.Items.Remove(lvItem);
                }
            }
            else
            {
                MessageBox.Show("Can only delete 1 at a time.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
            #endregion DeleteOperation
        }

        private void generateButton_Click(object sender, EventArgs e)
        {
            if (itemsList.Items.Count <= 0)
            {
                MessageBox.Show("There needs to be at least 1 item.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }

            // Create a list of CSV lines
            List<string> csvLines = new List<string>();

            // Add the header line
            csvLines.Add("item_name;item_ean;item_price;item_qty");

            // Add the item data
            foreach (Item item in Items)
            {
                string price = item.item_price.ToString().Replace(",", ".");
                string line = $"{item.item_name};{item.item_ean};{price};{item.item_qty}";
                csvLines.Add(line);
            }

            string filePath = @"C:\CSV_data\data.csv";

            try
            {
                // Write all lines to the CSV file
                File.WriteAllLines(filePath, csvLines);

                MessageBox.Show("CSV file generated successfully!", "Success", MessageBoxButtons.OK, MessageBoxIcon.Information);
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Error writing to file: {ex.Message}", "File Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }
    }


}