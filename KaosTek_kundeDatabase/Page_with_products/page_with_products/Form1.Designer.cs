namespace page_with_products
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            lblProductsTitle = new Label();
            listViewProducts = new ListView();
            columnId = new ColumnHeader();
            columnName = new ColumnHeader();
            columnEan = new ColumnHeader();
            columnPrice = new ColumnHeader();
            btnLoadProducts = new Button();
            btnEmptyList = new Button();
            SuspendLayout();
            // 
            // lblProductsTitle
            // 
            lblProductsTitle.AutoSize = true;
            lblProductsTitle.Font = new Font("Segoe UI", 15F, FontStyle.Regular, GraphicsUnit.Point);
            lblProductsTitle.Location = new Point(342, 34);
            lblProductsTitle.Name = "lblProductsTitle";
            lblProductsTitle.Size = new Size(173, 35);
            lblProductsTitle.TabIndex = 0;
            lblProductsTitle.Text = "Alle produkter";
            // 
            // listViewProducts
            // 
            listViewProducts.Columns.AddRange(new ColumnHeader[] { columnId, columnName, columnEan, columnPrice });
            listViewProducts.Font = new Font("Segoe UI", 13F, FontStyle.Regular, GraphicsUnit.Point);
            listViewProducts.Location = new Point(101, 92);
            listViewProducts.Name = "listViewProducts";
            listViewProducts.Size = new Size(647, 260);
            listViewProducts.TabIndex = 1;
            listViewProducts.UseCompatibleStateImageBehavior = false;
            listViewProducts.View = View.Details;
            // 
            // columnId
            // 
            columnId.Text = "ID";
            columnId.Width = 50;
            // 
            // columnName
            // 
            columnName.Text = "Navn";
            columnName.Width = 243;
            // 
            // columnEan
            // 
            columnEan.Text = "EAN";
            columnEan.Width = 200;
            // 
            // columnPrice
            // 
            columnPrice.Text = "Pris";
            columnPrice.Width = 150;
            // 
            // btnLoadProducts
            // 
            btnLoadProducts.Location = new Point(332, 379);
            btnLoadProducts.Name = "btnLoadProducts";
            btnLoadProducts.Size = new Size(183, 55);
            btnLoadProducts.TabIndex = 2;
            btnLoadProducts.Text = "Hent Produkter";
            btnLoadProducts.UseVisualStyleBackColor = true;
            btnLoadProducts.Click += btnLoadProducts_Click;
            // 
            // btnEmptyList
            // 
            btnEmptyList.Location = new Point(332, 451);
            btnEmptyList.Name = "btnEmptyList";
            btnEmptyList.Size = new Size(183, 55);
            btnEmptyList.TabIndex = 3;
            btnEmptyList.Text = "Tøm liste";
            btnEmptyList.UseVisualStyleBackColor = true;
            btnEmptyList.Click += btnEmptyList_Click;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(855, 540);
            Controls.Add(btnEmptyList);
            Controls.Add(btnLoadProducts);
            Controls.Add(listViewProducts);
            Controls.Add(lblProductsTitle);
            Name = "Form1";
            Text = "Produkter";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Label lblProductsTitle;
        private ListView listViewProducts;
        private ColumnHeader columnId;
        private ColumnHeader columnName;
        private ColumnHeader columnEan;
        private ColumnHeader columnPrice;
        private Button btnLoadProducts;
        private Button btnEmptyList;
    }
}