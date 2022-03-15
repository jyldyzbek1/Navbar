const menuToggler = document.querySelector(".menu__toggler");

const menu = document.querySelector(".menu");

menuToggler.addEventListener("click", function () {
    menu.classList.toggle("menu-show");
});