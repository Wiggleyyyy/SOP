namespace API
{
    public class User
    {
        public string username { get; set; }
        public string password { get; set; }
        public string hashed_password { get; set; }
    }

    public class _Login
    {
        public string site { get; set; }
        public string username { get; set; }
        public string password { get; set; }
        public string hashed_password { get; set; }
    }
}
