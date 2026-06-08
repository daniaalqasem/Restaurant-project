namespace WebApplication2.Models
{
    public class Order
    {
        public int Id { get; set; }
        public List<MenuItem> Items { get; set; } = new();     // قائمة الأطباق
        public decimal Subtotal { get; set; } = 0m;            // المجموع الفرعي
        public decimal DeliveryFee { get; set; } = 0m;         // رسوم التوصيل
        public decimal Total { get; set; } = 0m;               // الإجمالي
    }

}




