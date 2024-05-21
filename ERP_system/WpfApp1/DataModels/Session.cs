using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ERP_system.Classes
{
    public class Session
    {
        public User user = new User();

    }

    public class User
    {
        public int userID { get; set; }
        public string username { get; set; }

    }
}
