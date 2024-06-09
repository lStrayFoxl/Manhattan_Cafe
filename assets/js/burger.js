const burger_btn = document.querySelector(".icon_burger");
const mobile_menu = document.querySelector(".header_content_mobile");

burger_btn.addEventListener('click', function(event) {
    mobile_menu.classList.toggle('menu_active')
});