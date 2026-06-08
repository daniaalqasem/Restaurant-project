namespace WebApplication2.Models
{
    public class Reservation
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }                     // تاريخ الحجز
        public TimeSpan Time { get; set; }                     // وقت الحجز
        public string MobileNumber { get; set; } = string.Empty; // رقم الجوال
        public int NumberOfPeople { get; set; }                // عدد الأفراد
        public string Notes { get; set; } = string.Empty;      // ملاحظات إضافية
    }

}
