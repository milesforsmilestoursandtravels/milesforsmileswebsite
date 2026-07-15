window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (header) {
    if (window.scrollY > 50) {
      header.style.boxShadow = "0 8px 25px rgba(0,0,0,0.2)";
    } else {
      header.style.boxShadow = "none";
    }
  }
});
