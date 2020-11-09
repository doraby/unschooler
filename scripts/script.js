//отображение выбранного направления
const choise = document.getElementsByClassName('profession-choise')[1];
const choiseDisplay = document.querySelector('[data-spec-display]');

function setProfession() {
  if (localStorage.spec != undefined) {
    choiseDisplay.innerText = localStorage.spec;
  }
}
setProfession();

function chooseProf (e) {
  if (e.target.dataset.spec != undefined) {
    localStorage.spec = e.target.innerText;
    choiseDisplay.innerText = localStorage.spec;
  }
}

choise.addEventListener('click', chooseProf);

/* Выпдающее меню выбора профессии*/
const prof = document.getElementsByClassName('prof-menu')[0];
const professionList = document.getElementsByClassName('prof-menu-list')[0];
prof.addEventListener('mouseenter', showProf, false);
prof.addEventListener('mouseleave', hideProf, false);

function showProf() {
  professionList.style.height='auto';
  professionList.addEventListener('click', choiseProf, false);
}

function hideProf() {
  professionList.style.height='0';
  professionList.removeEventListener('click', choiseProf);
}

function choiseProf(e) {
  if (e.target.dataset.spec != undefined) {
    localStorage.spec = e.target.innerText;
    choiseDisplay.innerText = localStorage.spec;
    hideProf();
  }
}

//Бургер
const menu = document.querySelector('.menu');
const burgerBtn = document.querySelector('.header__burger-btn');
const closeBurgerBtn = document.querySelector('.cross-btn');
let leftPosition = 100; //menu.style.left;

function moveOn() {
  if (leftPosition > 0) {
    leftPosition -= 1;
    menu.style.left = leftPosition + "vw";
    setTimeout(moveOn, 1);
  }
}

function moveOff() {
  if (leftPosition < 100) {
    leftPosition += 1;
    menu.style.left = leftPosition + "vw";
    setTimeout(moveOff, 1);
  }
}

burgerBtn.addEventListener('click', moveOn);
closeBurgerBtn.addEventListener('click', moveOff);