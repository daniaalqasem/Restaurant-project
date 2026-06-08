namespace WebApplication2.Models
{
   
        public class StaffMember
        {
            public int Id { get; set; } = 0;                // رقم تعريفي لكل شخص
            public string Name { get; set; } = string.Empty; // اسم الموظف (مثلاً: أحمد علي)
            public string Role { get; set; } = string.Empty; // الوظيفة (رئيس الطهاة، مدير المطعم...)
            public string ImageUrl { get; set; } = string.Empty;    // رابط الصورة (اختياري)
        }
    
}
