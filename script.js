const choise = document.querySelector("[data-spec-form]");
const choiseDisplay = document.querySelector('[data-spec-display]');

if (localStorage.spec != undefined) {
  choiseDisplay.innerText = localStorage.spec;
}

choise.addEventListener('click', (event) => {
  if (event.target.dataset.spec != undefined) {
    localStorage.spec = event.target.innerText;
    choiseDisplay.innerText = localStorage.spec;
  }
});

const prof = document.getElementsByClassName('prof-menu');

prof.addEventListener("mouseenter", showProf, false);

function showProf(e) {}