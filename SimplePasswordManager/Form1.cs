namespace SimplePasswordManager
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void createLoginButton_click(object sender, EventArgs e)
        {
            createForm createForm_ = new createForm();
            createForm_.Show();
        }

        private void viewLoginsButton_Click(object sender, EventArgs e)
        {
            passwords passwordForm_ = new passwords();
            passwordForm_.Show();
        }
    }
}
