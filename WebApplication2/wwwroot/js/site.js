



let cart = [];
async function loadMenuItems() {
    try {
        let res = await fetch("https://localhost:7130/api/MenuItem/getMenuItem");
        let data = await res.json();

        // تحديد مكان العرض
        let container = document.getElementById("menu");
        container.innerHTML = "";// تنظيف المحتوى القديم

        // عرض أول 3 أصناف فقط
        let firstThree = data.slice(0, 3);
        firstThree.forEach(item => {
            let card = document.createElement("div");
            card.classList.add("menu-card");
            card.innerHTML = `
    <img src="${item.imagePath}" alt="${item.name}">
    <h2>${item.name}</h2>
    <p>${item.description}</p>
    <span class="price">${item.price} ريال</span>
   
   
`;



            container.appendChild(card);





        }
        );
    }
        catch (error) {
            console.error("خطأ أثناء تحميل الأطباق:", error);
        }



    
}



// استدعاء الفنكشن أول ما تفتح الصفحة
document.addEventListener("DOMContentLoaded", () => {
    loadMenuItems();



});



//يتغير لون الكلمه بالناف بار

document.addEventListener("DOMContentLoaded", () => {
    let currentUrl = window.location.href.replace(/\/$/, ""); // شيل / من النهاية لو موجود
    let links = document.querySelectorAll(".Links a");

    links.forEach(link => {
        let linkUrl = link.href.replace(/\/$/, "");
        if (linkUrl === currentUrl) {
            link.classList.add("active1"); // أضف الكلاس للرابط الحالي
        } else {
            link.classList.remove("active1"); // تأكد إن الباقي ما عندهم الكلاس
        }
    });
});





async function loadMenuItems2() {
    try {
        let res = await fetch("https://localhost:7130/api/MenuItem/getMenuItem");
        let data = await res.json();

        // تحديد مكان العرض
        let container = document.getElementById("menu2");
        container.innerHTML = "";// تنظيف المحتوى القديم

        
        data.forEach(item => {
            let card = document.createElement("div");
            card.classList.add("menu-card");
            card.innerHTML = `
    <img src="${item.imagePath}" alt="${item.name}">
    <h2>${item.name}</h2>
    <p>${item.description}</p>
    <span class="price">${item.price} ريال</span>
   
`;



            container.appendChild(card);





        }
        );
    }
    catch (error) {
        console.error("خطأ أثناء تحميل الأطباق:", error);
    }




}



// استدعاء الفنكشن أول ما تفتح الصفحة
document.addEventListener("DOMContentLoaded", () => {
    loadMenuItems2();



});


document.addEventListener("DOMContentLoaded", () => {
    let buttons = document.querySelectorAll(".part42 button");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            // شيل الكلاس من كل الأزرار
            buttons.forEach(b => b.classList.remove("active-btn"));

            // أضف الكلاس للزر اللي انضغط
            btn.classList.add("active-btn");
        });
    });
});




document.addEventListener("DOMContentLoaded", () => {
    let buttons = document.querySelectorAll(".part42 button");

    buttons.forEach(btn => {
        btn.addEventListener("click", async () => {
            let category = btn.textContent.trim(); // اسم الزر بالعربي

            if (category === "الكل") {
                loadMenuItems2(); // جلب كل الأصناف
            } else {
                try {
                    let res = await fetch(`https://localhost:7130/api/MenuItem/getByCategory/${encodeURIComponent(category)}`);
                   
                    let data = await res.json();
                   
                    let container = document.getElementById("menu2");
                    container.innerHTML = "";

                    data.forEach(item => {
                        let card = document.createElement("div");
                        card.classList.add("menu-card");
                        card.innerHTML = `
    <img src="${item.imagePath}" alt="${item.name}">
    <h2>${item.name}</h2>
    <p>${item.description}</p>
    <span class="price">${item.price} ريال</span>
  
`;

                        container.appendChild(card);
                    });
                } catch (error) {
                    console.error("خطأ أثناء تحميل الأطباق:", error);
                }
            }
        });
    });
});



// فنكشن تحميل الموظفين من الـ API
async function loadStaffMembers() {
    try {
        let res = await fetch("https://localhost:7130/api/MenuItem/getStaff");
        let data = await res.json();

        // تحديد مكان العرض
        let container = document.getElementById("staff");
        container.innerHTML = ""; // تنظيف المحتوى القديم

        // عرض كل الموظفين
        data.forEach(staff => {
            let card = document.createElement("div");
            card.classList.add("staff-card");

            card.innerHTML = `
                <img src="${staff.imageUrl}" alt="${staff.name}" class="staff-image"/>
                <h3>${staff.name}</h3>
                <p>${staff.role}</p>
            `;

            container.appendChild(card);
        });
    } catch (error) {
        console.error("خطأ أثناء تحميل الموظفين:", error);
    }
}

// استدعاء الفنكشن أول ما تفتح الصفحة
document.addEventListener("DOMContentLoaded", () => {
    loadStaffMembers();
});






// ربط النموذج مع الـ API
document.querySelector(".contact-form").addEventListener("submit", async function (e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة

    // جمع البيانات من الحقول
    let data = {
        fullName: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    try {
        // إرسال البيانات للـ API
        let res = await fetch("https://localhost:7130/api/MenuItem/sendMessage", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        let result = await res.json();

        if (result.success) {
            alert("✅ تم إرسال الرسالة وحفظها بالداتابيس");
            document.querySelector(".contact-form").reset(); // تنظيف الحقول
        } else {
            alert("⚠️ حدث خطأ: " + result.msg);
        }
    } catch (error) {
        console.error("خطأ أثناء إرسال الرسالة:", error);
        alert("❌ لم يتم إرسال الرسالة، حاول مرة أخرى");
    }
});

document.getElementById("reservationForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    let data = {
        date: document.getElementById("date").value,              // yyyy-MM-dd
        time: document.getElementById("time").value + ":00",      // HH:mm:ss
        numberOfPeople: parseInt(document.getElementById("people").value),
        mobileNumber: document.getElementById("phone").value,
        notes: document.getElementById("notes").value
    };

    try {
        let res = await fetch("https://localhost:7130/api/MenuItem/addReservation", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        let result = await res.json();

        if (result.success) {
            alert("✅ تم تأكيد الحجز وحفظه بالداتابيس");
            document.getElementById("reservationForm").reset(); // تنظيف الحقول
        } else {
            alert("⚠️ حدث خطأ: " + result.msg);
        }
    } catch (error) {
        console.error("خطأ أثناء إرسال الحجز:", error);
        alert("❌ لم يتم إرسال الحجز، حاول مرة أخرى");
    }
});





