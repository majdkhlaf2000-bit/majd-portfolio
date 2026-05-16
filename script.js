/* ============================
   زر العودة للأعلى
============================ */
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (scrollBtn) {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  }
});

if (scrollBtn) {
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}


/* ============================
   LOADER
============================ */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.classList.add("hide");
    }, 500);
  }
});


/* ============================
   DARK MODE + حفظ الوضع
============================ */
const darkToggle = document.getElementById("darkModeToggle");
const darkIcon = document.getElementById("darkIcon");

// تحميل الوضع المحفوظ
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark");
  if (darkIcon) darkIcon.textContent = "☀️";
}

if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      if (darkIcon) darkIcon.textContent = "☀️";
      localStorage.setItem("darkMode", "enabled");
    } else {
      if (darkIcon) darkIcon.textContent = "🌙";
      localStorage.setItem("darkMode", "disabled");
    }
  });
}

const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('#projects .item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {

    // تغيير active
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    portfolioItems.forEach(item => {

      if (filter === 'all') {
        item.style.display = "block";
      } 
      else if (item.classList.contains(filter)) {
        item.style.display = "block";
      } 
      else {
        item.style.display = "none";
      }

    });

  });
});
