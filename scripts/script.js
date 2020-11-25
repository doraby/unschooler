//отображение выбранного направления
const choiseDisplay = document.getElementsByClassName('profession__display')[0];

function setProfession() {
  if (localStorage.getItem('spec') != undefined) {
    choiseDisplay.innerText = localStorage.getItem('spec');
  }
}
setProfession();

/* Выпдающее меню выбора профессии*/
const prof = document.getElementsByClassName('profession__display')[0];
const professionList = document.getElementsByClassName('profession__menu')[0];
prof.addEventListener('mouseenter', showProf, false);
professionList.addEventListener('mouseleave', hideProf, false);

function showProf() {
  professionList.style.height='auto';
  professionList.addEventListener('click', choiseProf, false);
}

function hideProf() {
  professionList.style.height='0';
  professionList.removeEventListener('click', choiseProf);
}

function choiseProf(e) {
  if (e.target.classList.contains('profession__item')) {
    localStorage.setItem('spec', e.target.innerText);
    choiseDisplay.innerText = localStorage.getItem('spec');
    hideProf();
  }
}

//Бургер
const menu = document.querySelector('.menu');
const burgerBtn = document.querySelector('.header__burger-btn');
const closeBurgerBtn = document.querySelector('.cross-btn');

function moveOn() {
  menu.classList.add("menu_on");
  menu.classList.remove("menu_out");
}

function moveOut() {
  menu.classList.add("menu_out");
  menu.classList.remove("menu_on");
}


burgerBtn.addEventListener('click', moveOn);
closeBurgerBtn.addEventListener('click', moveOut);

/* Таблички
setCard();

function setCard() {
  let cardURL = '../scripts/books.json',
      request = new XMLHttpRequest();
  request.open('GET', cardURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    let courses = request.response;
    for (let i = 0; i < courses.length; i++) {
      card(courses[i]);
    }
  }

  function card(courses) {
    let cardList = document.getElementsByClassName('card__list')[0],
        card = document.createElement('div'),
        title = document.createElement('div'),
        author = document.createElement('div'),
        difficulty = document.createElement('div'),
        direction = document.createElement('div'),
        cardImg = document.createElement('img');
        cardCheckBox = document.createElement('input');

    card.className = 'card';
    title.innerText = courses.title;
    title.className = 'text_size_s card__title';
    author.innerText = courses.author;
    author.className = 'text_size_s card__author';
    difficulty.innerText = courses.difficulty;
    difficulty.className = 'text_size_s card__difficulty';
    direction.innerText = courses.direction;
    direction.className = 'text_size_s card__direction';
    cardImg.src = courses.img;
    cardImg.className = 'card__img';
    cardCheckBox.setAttribute('type', 'checkbox');
    cardCheckBox.className = 'card__checkbox';
    card.appendChild(cardImg);
    card.appendChild(difficulty);
    card.appendChild(author);
    card.appendChild(title);
    card.appendChild(direction);
    card.appendChild(cardCheckBox);
    cardList.append(card);
  }
}*/

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