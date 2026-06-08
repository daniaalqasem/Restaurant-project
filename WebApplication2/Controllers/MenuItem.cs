using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication2.Data;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MenuItemController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public MenuItemController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("getMenuItem")]
        public IActionResult GetMenuItem()
        {
            var menuItemList = _context.MenuItems.ToList();
            return Ok(menuItemList);
        }


        // جلب الأصناف حسب القسم (Category)
        [HttpGet("getByCategory/{categoryName}")]
        public IActionResult GetByCategory(string categoryName)
        {
            var items = _context.MenuItems
                .Include(m => m.Category)
                .Where(m => m.Category.Name.Trim() == categoryName.Trim())
                .ToList();

            return Ok(items);
        }




       

        [HttpGet("getStaff")]
        public IActionResult GetStaff()
        {
            var staffList = _context.StaffMembers.ToList();
            return Ok(staffList);

        }




        [HttpPost("sendMessage")]
        public IActionResult SendMessage([FromBody] ContactMessage message)
        {
            if (message == null)
                return BadRequest("البيانات غير صحيحة");

            _context.ContactMessages.Add(message);
            _context.SaveChanges();

            return Ok(new { success = true, msg = "تم حفظ الرسالة بنجاح" });
        }



        [HttpPost("addReservation")]
        public IActionResult AddReservation([FromBody] Reservation reservation)
        {
            if (reservation == null)
                return BadRequest("البيانات غير صحيحة");

            _context.Reservations.Add(reservation);
            _context.SaveChanges();

            return Ok(new { success = true, msg = "✅ تم حفظ الحجز بنجاح" });
        }


      





    }

    }