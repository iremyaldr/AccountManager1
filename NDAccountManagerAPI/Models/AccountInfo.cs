// Models/AccountInfo.cs
namespace NDAccountManagerAPI.Models
{
    public class AccountInfo
    {
        public int Id { get; set; }
        public string AccountName { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Category { get; set; }
        public DateTime CreatedAt { get; set; }
        public string SharedWith { get; set; }
    }
}
