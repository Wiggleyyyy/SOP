namespace SimplePasswordManager
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
            createLoginButton = new Button();
            viewLoginsButton = new Button();
            passwordManagerLabel = new Label();
            SuspendLayout();
            // 
            // createLoginButton
            // 
            createLoginButton.Location = new Point(61, 81);
            createLoginButton.Name = "createLoginButton";
            createLoginButton.Size = new Size(153, 65);
            createLoginButton.TabIndex = 0;
            createLoginButton.Text = "Create login";
            createLoginButton.UseVisualStyleBackColor = true;
            createLoginButton.Click += createLoginButton_click;
            // 
            // viewLoginsButton
            // 
            viewLoginsButton.Location = new Point(61, 164);
            viewLoginsButton.Name = "viewLoginsButton";
            viewLoginsButton.Size = new Size(153, 65);
            viewLoginsButton.TabIndex = 1;
            viewLoginsButton.Text = "View logins";
            viewLoginsButton.UseVisualStyleBackColor = true;
            viewLoginsButton.Click += viewLoginsButton_Click;
            // 
            // passwordManagerLabel
            // 
            passwordManagerLabel.AutoSize = true;
            passwordManagerLabel.Location = new Point(78, 29);
            passwordManagerLabel.Name = "passwordManagerLabel";
            passwordManagerLabel.Size = new Size(107, 15);
            passwordManagerLabel.TabIndex = 2;
            passwordManagerLabel.Text = "Password manager";
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(277, 262);
            Controls.Add(passwordManagerLabel);
            Controls.Add(viewLoginsButton);
            Controls.Add(createLoginButton);
            Name = "Form1";
            Text = "Form1";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Button createLoginButton;
        private Button viewLoginsButton;
        private Label passwordManagerLabel;
    }
}
