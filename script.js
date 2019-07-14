const newGameBtn = document.getElementById("new-game");
const imgsArray = ["chrome.svg","chrome.svg","edge.svg","edge.svg","firefox.svg","firefox.svg","ie.svg","ie.svg","konqueror.svg","konqueror.svg","maxthon.svg","maxthon.svg","midori.svg","midori.svg","opera.svg","opera.svg"]
const fronts = document.querySelectorAll(".card-cell img");
const backs = document.querySelectorAll(".card-cell div");
const docClicks = document.querySelector("#clicks");

let counter = 0;
let toCompare = [];
let g1, g2;
let clicks = 0;

newGame();

function newGame() {
  counter = 0;
  clicks = 0;
  let cardsArray = [];
  let min=1, max=17;
  let random = Math.floor(Math.random() * (+max - +min)) + +min;
  for (let i=1; i<=fronts.length; i++) {
    while (cardsArray.includes(random)) {
      random = Math.floor(Math.random() * (+max - +min)) + +min;
    }
    fronts[random-1].setAttribute("src",`img/${imgsArray[i-1]}`);
    backs[random-1].classList.remove("uncovered");
    backs[random-1].setAttribute("under",imgsArray[i-1]);
    cardsArray.push(random);
  }
}

function uncoverCard() {
  switch (counter) {
    case 0:
      ++counter;
      this.classList.add("uncovered");
      g1 = this;
      console.log(counter);
      break;
    case 1:
      ++counter;
      this.classList.add("uncovered");
      g2 = this;
      if (g1.getAttribute("under") === g2.getAttribute("under")) {
        g1.setAttribute("matched",true);
        g2.setAttribute("matched",true);
        counter = 0;
        console.log(counter);
      }
      console.log(counter);
      break;
  }
}

window.addEventListener("click",() => {
  ++clicks;
  // docClicks.innerHTML = clicks.toString();
  if (counter === 2) {
    g1.classList.remove("uncovered");
    g2.classList.remove("uncovered");
    counter = 0;
  }
},true)

backs.forEach((node) => {
  node.addEventListener("click", uncoverCard);
});


newGameBtn.addEventListener("click", newGame);