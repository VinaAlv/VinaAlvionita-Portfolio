//Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbarFixed')
    } else {
        header.classList.remove('navbarFixed')
    }
}

//Menu
const Menu = document.querySelector('#Menu');
const navMenu = document.querySelector('#navMenu');

Menu.addEventListener('click', function () {
    Menu.classList.toggle('activeMenu');
    navMenu.classList.toggle('hidden');
});