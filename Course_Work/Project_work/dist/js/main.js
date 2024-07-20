// select different DOM items
const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const formPopup = document.getElementById("form-popup");
const selectedImage = document.getElementById("selected-image");

// sets initial state Of menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    // set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    // set menu state
    showMenu = false;
  }
}

// Handle contact form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    showFormPopup();
  });

function showFormPopup() {
  formPopup.style.display = "flex";
  formPopup.addEventListener("click", closeFormPopup);
}

function closeFormPopup(e) {
  if (e.target === formPopup || e.target.classList.contains("close-btn")) {
    formPopup.style.display = "none";
    formPopup.removeEventListener("click", closeFormPopup);
  }
}

function selectImage(imgSrc) {
  selectedImage.src = imgSrc;
}

// Function to show extra information
function showInfo(extraId) {
  const popUp = document.createElement("div");
  popUp.classList.add("pop-up");

  let infoText = "";
  let imgSrc = "";

  switch (extraId) {
    case 1:
      imgSrc = "img/savusauna.JPG";
      infoText =
        "This is a traditional smoke sauna. Enjoy the authentic experience with a unique atmosphere. 100€/heating and usage service.";
      break;
    case 2:
      imgSrc = "img/palju.JPG";
      infoText =
        "Relax in our outdoor hot tub, perfect for any season and a great addition to your stay. 75€/heating and usage service.";
      break;
    case 3:
      imgSrc = "img/peramoottori.JPG";
      infoText =
        "Our boat motor is available for rent to enhance your boating experience on the lake. 25€+petrol cost per day.";
      break;
    default:
      infoText = "No information available.";
  }

  popUp.innerHTML = `
    <div class="pop-up-content">
      <span class="close-btn">&times;</span>
      <img src="${imgSrc}" alt="Extra ${extraId}">
      <div class="info-text">${infoText}</div>
    </div>
  `;

  document.body.appendChild(popUp);

  // Close the pop-up when clicking outside the pop-up-content or on close button
  popUp.addEventListener("click", (e) => {
    if (e.target === popUp || e.target.classList.contains("close-btn")) {
      document.body.removeChild(popUp);
    }
  });
}
