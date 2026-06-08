namespace WebApplication2.Models
{
    public class ContactMessage
    {
        public int Id { get; set; }
        public string FullName { get; set; } = string.Empty;   // الاسم الكامل
        public string Email { get; set; } = string.Empty;      // البريد الإلكتروني
        public string Subject { get; set; } = string.Empty;    // الموضوع
        public string Message { get; set; } = string.Empty;    // نص الرسالة
    }

}
