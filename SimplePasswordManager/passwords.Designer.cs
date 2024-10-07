namespace SimplePasswordManager
{
    partial class passwords
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
            passwordList = new ListView();
            deleteButton = new Button();
            SuspendLayout();
            // 
            // passwordList
            // 
            passwordList.Location = new Point(12, 12);
            passwordList.Name = "passwordList";
            passwordList.Size = new Size(776, 222);
            passwordList.TabIndex = 0;
            passwordList.UseCompatibleStateImageBehavior = false;
            // 
            // deleteButton
            // 
            deleteButton.Location = new Point(330, 306);
            deleteButton.Name = "deleteButton";
            deleteButton.Size = new Size(138, 79);
            deleteButton.TabIndex = 1;
            deleteButton.Text = "Delete";
            deleteButton.UseVisualStyleBackColor = true;
            deleteButton.Click += deleteButton_Click;
            // 
            // passwords
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 450);
            Controls.Add(deleteButton);
            Controls.Add(passwordList);
            Name = "passwords";
            Text = "passwords";
            ResumeLayout(false);
        }

        #endregion

        private ListView passwordList;
        private Button deleteButton;
    }
}