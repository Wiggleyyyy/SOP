namespace SimplePasswordManager
{
    partial class createForm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
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
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            siteText = new TextBox();
            siteLabel = new Label();
            usernameLabel = new Label();
            usernameText = new TextBox();
            emailLabel = new Label();
            emailText = new TextBox();
            label1 = new Label();
            passwordText = new TextBox();
            createButton = new Button();
            generatePasswordButton = new Button();
            viewPasswordButton = new Button();
            SuspendLayout();
            // 
            // siteText
            // 
            siteText.Location = new Point(15, 57);
            siteText.Name = "siteText";
            siteText.Size = new Size(108, 23);
            siteText.TabIndex = 0;
            // 
            // siteLabel
            // 
            siteLabel.AutoSize = true;
            siteLabel.Location = new Point(18, 29);
            siteLabel.Name = "siteLabel";
            siteLabel.Size = new Size(26, 15);
            siteLabel.TabIndex = 1;
            siteLabel.Text = "Site";
            // 
            // usernameLabel
            // 
            usernameLabel.AutoSize = true;
            usernameLabel.Location = new Point(142, 29);
            usernameLabel.Name = "usernameLabel";
            usernameLabel.Size = new Size(60, 15);
            usernameLabel.TabIndex = 3;
            usernameLabel.Text = "Username";
            // 
            // usernameText
            // 
            usernameText.Location = new Point(139, 57);
            usernameText.Name = "usernameText";
            usernameText.Size = new Size(108, 23);
            usernameText.TabIndex = 2;
            // 
            // emailLabel
            // 
            emailLabel.AutoSize = true;
            emailLabel.Location = new Point(258, 29);
            emailLabel.Name = "emailLabel";
            emailLabel.Size = new Size(36, 15);
            emailLabel.TabIndex = 5;
            emailLabel.Text = "Email";
            // 
            // emailText
            // 
            emailText.Location = new Point(255, 57);
            emailText.Name = "emailText";
            emailText.Size = new Size(108, 23);
            emailText.TabIndex = 4;
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Location = new Point(375, 29);
            label1.Name = "label1";
            label1.Size = new Size(57, 15);
            label1.TabIndex = 7;
            label1.Text = "Password";
            // 
            // passwordText
            // 
            passwordText.Location = new Point(372, 57);
            passwordText.Name = "passwordText";
            passwordText.PasswordChar = '*';
            passwordText.Size = new Size(108, 23);
            passwordText.TabIndex = 6;
            // 
            // createButton
            // 
            createButton.Location = new Point(139, 144);
            createButton.Name = "createButton";
            createButton.Size = new Size(215, 63);
            createButton.TabIndex = 8;
            createButton.Text = "Create";
            createButton.UseVisualStyleBackColor = true;
            createButton.Click += createButton_Click;
            // 
            // generatePasswordButton
            // 
            generatePasswordButton.Location = new Point(372, 86);
            generatePasswordButton.Name = "generatePasswordButton";
            generatePasswordButton.Size = new Size(68, 23);
            generatePasswordButton.TabIndex = 9;
            generatePasswordButton.Text = "Generate";
            generatePasswordButton.UseVisualStyleBackColor = true;
            generatePasswordButton.Click += generatePasswordButton_Click;
            // 
            // viewPasswordButton
            // 
            viewPasswordButton.Location = new Point(446, 86);
            viewPasswordButton.Name = "viewPasswordButton";
            viewPasswordButton.Size = new Size(46, 23);
            viewPasswordButton.TabIndex = 10;
            viewPasswordButton.Text = "View";
            viewPasswordButton.UseVisualStyleBackColor = true;
            viewPasswordButton.Click += viewPasswordButton_Click;
            // 
            // createForm
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(515, 234);
            Controls.Add(viewPasswordButton);
            Controls.Add(generatePasswordButton);
            Controls.Add(createButton);
            Controls.Add(label1);
            Controls.Add(passwordText);
            Controls.Add(emailLabel);
            Controls.Add(emailText);
            Controls.Add(usernameLabel);
            Controls.Add(usernameText);
            Controls.Add(siteLabel);
            Controls.Add(siteText);
            Name = "createForm";
            Text = "createForm";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private TextBox siteText;
        private Label siteLabel;
        private Label usernameLabel;
        private TextBox usernameText;
        private Label emailLabel;
        private TextBox emailText;
        private Label label1;
        private TextBox passwordText;
        private Button createButton;
        private Button generatePasswordButton;
        private Button viewPasswordButton;
    }
}