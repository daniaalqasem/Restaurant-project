using WebApplication2.Models;

namespace WebApplication2.Models
{
    public class MenuItem
    {
        public int Id { get; set; } = 0;                 // رقم تعريفي افتراضي
        public string Name { get; set; } = string.Empty; // اسم الصنف، افتراضي فارغ
        public string Description { get; set; } = string.Empty; // وصف قصير، افتراضي فارغ
        public decimal Price { get; set; } = 0m;         // السعر، افتراضي صفر

        public string ImagePath { get; set; } // رابط أو مسار الصورة
        public int CategoryId { get; set; }              // مفتاح القسم (FK)

        public Category Category { get; set; }           // العلاقة مع القسم

    }





}
