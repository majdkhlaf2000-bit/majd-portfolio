document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     LOADER (FIXED)
  ========================= */
  const loader = document.getElementById("loader");

  window.addEventListener("load", () => {
    if (loader) {
      setTimeout(() => {
        loader.classList.add("hide");
      }, 500);
    }
  });

  /* =========================
     DARK MODE
  ========================= */
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
        localStorage.setItem("darkMode", "enabled");
        if (darkIcon) darkIcon.textContent = "☀️";
      } else {
        localStorage.setItem("darkMode", "disabled");
        if (darkIcon) darkIcon.textContent = "🌙";
      }
    });
  }

  /* =========================
     SCROLL TOP BUTTON
  ========================= */
  const scrollBtn = document.getElementById("scrollTopBtn");

  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* =========================
     PORTFOLIO FILTER (FIXED)
  ========================= */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".portfolio-box .service");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {

      // remove active
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      items.forEach(item => {

        if (filter === "all") {
          item.style.display = "flex";
        } else {
          if (item.classList.contains(filter)) {
            item.style.display = "flex";
          } else {
            item.style.display = "none";
          }
        }

      });

    });
  });

});
