var menuIcon = document.getElementsByClassName('menu-icon')[0],
    menu = document.getElementsByClassName('menu')[0],
    openedClass = 'menu_opened';



menuIcon.addEventListener('click', toogleMenu);

function toogleMenu() {
    if (menu.classList.contains(openedClass)) {
        menu.classList.remove(openedClass);
    } else {
        menu.classList.add(openedClass);
    }
}