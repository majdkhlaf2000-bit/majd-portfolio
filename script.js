document.addEventListener("DOMContentLoaded", () => {

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
     DARK MODE
  ============================ */
  const darkToggle = document.getElementById("darkModeToggle");
  const darkIcon = document.getElementById("darkIcon");

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


  /* ============================
     PORTFOLIO FILTER (FIXED)
  ============================ */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll("#projects .item");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {

      // active button
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      items.forEach(item => {

        if (filter === "all") {
          item.style.display = "block";
          item.style.opacity = "1";
        } 
        else if (item.classList.contains(filter)) {
          item.style.display = "block";
          item.style.opacity = "1";
        } 
        else {
          item.style.display = "none";
        }

      });

    });
  });

});
