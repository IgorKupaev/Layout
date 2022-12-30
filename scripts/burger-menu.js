const menuOpen = document.querySelector("#menu-open");
const menuClose = document.querySelector("#menu-close");
const navList = document.querySelector("#nav-list");

function openMenu() {
    navList.style = "left: 0";
}

function closeMenu() {
    navList.style = "left: -100%";
}

menuOpen.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);