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

// Таблички
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
        direction = document.createElement('div')

    card.className = 'card';
    title.innerHTML = courses.title;
    author.innerText = courses.author;
    difficulty.innerText = courses.difficulty;
    direction.innerText = courses.direction;
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(difficulty);
    card.appendChild(direction);
    cardList.append(card);
  }
}