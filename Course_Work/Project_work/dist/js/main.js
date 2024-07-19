document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");
  let showMenu = false;

  menuBtn.addEventListener("click", () => {
    if (!showMenu) {
      menuBtn.classList.add("close");
      menu.classList.add("show");
      showMenu = true;
    } else {
      menuBtn.classList.remove("close");
      menu.classList.remove("show");
      showMenu = false;
    }
  });

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Simple image slideshow (if needed)
  const slideshows = document.querySelectorAll(".slideshow");

  slideshows.forEach((slideshow) => {
    const images = slideshow.querySelectorAll("img");
    let currentIndex = 0;

    function showImage(index) {
      images.forEach((img, i) => {
        img.style.display = i === index ? "block" : "none";
      });
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }

    showImage(currentIndex);
    setInterval(nextImage, 3000); // Change image every 3 seconds
  });
});
