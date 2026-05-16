// =========================
// SAFE LOADER FIX (GUARANTEED)
// =========================

// نضمن إنه يشتغل حتى لو صار أي خطأ ثاني
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.pointerEvents = "none";
      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }, 300);
  }
});

document.addEventListener("DOMContentLoaded",
