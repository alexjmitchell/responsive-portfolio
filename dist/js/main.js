const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

let showMenu = false;

const toggleMenu = () => {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    menu.classList.add("show");
    for (let navItem of navItems) {
      navItem.classList.add("show");
    }

    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    menu.classList.remove("show");
    for (let navItem of navItems) {
      navItem.classList.remove("show");
    }

    showMenu = false;
  }
};

menuBtn.addEventListener("click", toggleMenu);
