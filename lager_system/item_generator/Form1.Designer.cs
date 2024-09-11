namespace item_generator
{
    partial class form1
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
            itemsList = new ListView();
            itemsLabel = new Label();
            generateButton = new Button();
            nameText = new TextBox();
            nameLabel = new Label();
            eanLabel = new Label();
            eanText = new TextBox();
            priceLabel = new Label();
            priceText = new TextBox();
            qtyLabel = new Label();
            qtyText = new TextBox();
            autoButton = new Button();
            addButton = new Button();
            deleteButton = new Button();
            SuspendLayout();
            // 
            // itemsList
            // 
            itemsList.Location = new Point(12, 363);
            itemsList.Name = "itemsList";
            itemsList.Size = new Size(1176, 253);
            itemsList.TabIndex = 0;
            itemsList.UseCompatibleStateImageBehavior = false;
            // 
            // itemsLabel
            // 
            itemsLabel.AutoSize = true;
            itemsLabel.Font = new Font("Segoe UI", 20F, FontStyle.Regular, GraphicsUnit.Point);
            itemsLabel.Location = new Point(16, 317);
            itemsLabel.Name = "itemsLabel";
            itemsLabel.Size = new Size(81, 37);
            itemsLabel.TabIndex = 1;
            itemsLabel.Text = "Items";
            // 
            // generateButton
            // 
            generateButton.Font = new Font("Segoe UI", 15F, FontStyle.Regular, GraphicsUnit.Point);
            generateButton.Location = new Point(1006, 641);
            generateButton.Name = "generateButton";
            generateButton.Size = new Size(182, 72);
            generateButton.TabIndex = 2;
            generateButton.Text = "Generate CSV";
            generateButton.UseVisualStyleBackColor = true;
            generateButton.Click += generateButton_Click;
            // 
            // nameText
            // 
            nameText.Font = new Font("Segoe UI", 15F, FontStyle.Regular, GraphicsUnit.Point);
            nameText.Location = new Point(16, 55);
            nameText.Name = "nameText";
            nameText.Size = new Size(295, 34);
            nameText.TabIndex = 3;
            // 
            // nameLabel
            // 
            nameLabel.AutoSize = true;
            nameLabel.Font = new Font("Segoe UI", 15F, FontStyle.Regular, GraphicsUnit.Point);
            nameLabel.Location = new Point(16, 24);
            nameLabel.Name = "nameLabel";
            nameLabel.Size = new Size(64, 28);
            nameLabel.TabIndex = 4;
            nameLabel.Text = "Name";
            // 
            // eanLabel
            // 
            eanLabel.AutoSize = true;
            eanLabel.Font = new Font("Segoe UI", 15F, FontStyle.Regular, GraphicsUnit.Point);
            eanLabel.Location = new Point(317, 24);
            eanLabel.Name = "eanLabel";
            eanLabel.Size = new Size(50, 28);
            eanLabel.TabIndex = 6;
            eanLabel.Text = "EAN";
            // 
            // eanText
            // 
            eanText.Font = new Font("Segoe UI", 15F, FontStyle.Regular, GraphicsUnit.Point);
            eanText.Location = new Point(317, 55);
            eanText.Name = "eanText";
            eanText.Size = new Size(295, 34);
            eanText.TabIndex = 5;
            eanText.KeyPress += eanText_KeyPress;
            // 
            // priceLabel
            // 
            priceLabel.AutoSize = true;
            priceLabel.Font = new Font("Segoe UI", 15F, FontStyle.Regular, GraphicsUnit.Point);
            priceLabel.Location = new Point(16, 98);
            priceLabel.Name = "priceLabel";
            priceLabel.Size = new Size(54, 28);
            priceLabel.TabIndex = 8;
            priceLabel.Text = "Price";
            // 
            // priceText
            // 
            priceText.Font = new Font("Segoe UI", 15F, FontStyle.Regular, GraphicsUnit.Point);
            priceText.Location = new Point(16, 129);
            priceText.Name = "priceText";
            priceText.Size = new Size(295, 34);
            priceText.TabIndex = 7;
            priceText.KeyPress += priceText_KeyPress;
            // 
            // qtyLabel
            // 
            qtyLabel.AutoSize = true;
            qtyLabel.Font = new Font("Segoe UI", 15F, FontStyle.Regular, GraphicsUnit.Point);
            qtyLabel.Location = new Point(317, 98);
            qtyLabel.Name = "qtyLabel";
            qtyLabel.Size = new Size(88, 28);
            qtyLabel.TabIndex = 10;
            qtyLabel.Text = "Quantity";
            // 
            // qtyText
            // 
            qtyText.Font = new Font("Segoe UI", 15F, FontStyle.Regular, GraphicsUnit.Point);
            qtyText.Location = new Point(317, 129);
            qtyText.Name = "qtyText";
            qtyText.Size = new Size(295, 34);
            qtyText.TabIndex = 9;
            qtyText.KeyPress += qtyText_KeyPress;
            // 
            // autoButton
            // 
            autoButton.Font = new Font("Segoe UI", 15F, FontStyle.Regular, GraphicsUnit.Point);
            autoButton.Location = new Point(792, 289);
            autoButton.Name = "autoButton";
            autoButton.Size = new Size(190, 65);
            autoButton.TabIndex = 12;
            autoButton.Text = "Auto fill";
            autoButton.UseVisualStyleBackColor = true;
            autoButton.Click += autoButton_Click;
            // 
            // addButton
            // 
            addButton.Font = new Font("Segoe UI", 15F, FontStyle.Regular, GraphicsUnit.Point);
            addButton.Location = new Point(998, 289);
            addButton.Name = "addButton";
            addButton.Size = new Size(190, 65);
            addButton.TabIndex = 13;
            addButton.Text = "Add item";
            addButton.UseVisualStyleBackColor = true;
            addButton.Click += addButton_Click;
            // 
            // deleteButton
            // 
            deleteButton.Font = new Font("Segoe UI", 15F, FontStyle.Regular, GraphicsUnit.Point);
            deleteButton.Location = new Point(792, 641);
            deleteButton.Name = "deleteButton";
            deleteButton.Size = new Size(182, 72);
            deleteButton.TabIndex = 14;
            deleteButton.Text = "Delete";
            deleteButton.UseVisualStyleBackColor = true;
            deleteButton.Click += deleteButton_Click;
            // 
            // form1
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(1200, 725);
            Controls.Add(deleteButton);
            Controls.Add(addButton);
            Controls.Add(autoButton);
            Controls.Add(qtyLabel);
            Controls.Add(qtyText);
            Controls.Add(priceLabel);
            Controls.Add(priceText);
            Controls.Add(eanLabel);
            Controls.Add(eanText);
            Controls.Add(nameLabel);
            Controls.Add(nameText);
            Controls.Add(generateButton);
            Controls.Add(itemsLabel);
            Controls.Add(itemsList);
            Name = "form1";
            Text = "Generator";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private ListView itemsList;
        private Label itemsLabel;
        private Button generateButton;
        private TextBox nameText;
        private Label nameLabel;
        private Label eanLabel;
        private TextBox eanText;
        private Label priceLabel;
        private TextBox priceText;
        private Label qtyLabel;
        private TextBox qtyText;
        private Button autoButton;
        private Button addButton;
        private Button deleteButton;
    }
}