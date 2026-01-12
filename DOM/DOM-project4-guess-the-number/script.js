let randomNumber = parseInt(Math.random() * 100 + 1);
const sbt = document.querySelector('#sbt');
const guessFild = document.querySelector('#guessfild');
const guessesSlot = document.querySelector('.guesses');
const lastresult = document.querySelector('.lastresult');
const lowandHeigh = document.querySelector('.lowandHeigh');
const result = document.querySelector('.result');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  sbt.addEventListener('click', (e) => {
    e.preventDefault();
    const guesse = parseInt(guessFild.value);
    validateGuess(guesse);
  });
}

function validateGuess(guesse) {
  if (isNaN(guesse)) {
    alert('Please Enter Valid Number');
  } else if (guesse < 1) {
    alert('Please enter a number More then 1');
  } else if (guesse > 100) {
    alert('Please enter a number Less then 100');
  } else {
    prevGuess.push(guesse);
    if (numGuess === 10) {
      displayGuess(guesse);
      displayMessage(`Game Over random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guesse);
      checkguess(guesse);
    }
  }
}

function checkguess(guesse) {
  if (guesse === randomNumber) {
    displayMessage(`You guessed right`);
    endGame();
  } else if (guesse < randomNumber) {
    displayMessage(`guesse number is tooo low`);
  } else if (guesse > randomNumber) {
    displayMessage(`guesse number is Tooo Heigh`);
  }
}

function displayGuess(guesse) {
  guessFild.value = '';
  guessesSlot.innerHTML += `${guesse}, `;
  numGuess++;
  lastresult.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  lowandHeigh.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  guessFild.value = '';
  guessFild.setAttribute('disabled', '');
  p.classList.add = 'button';
  p.innerHTML = `<h3 id ='newGame'> Start New Game </h3>`;
  result.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGame = document.querySelector('#newGame');
  newGame.addEventListener('click', (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessesSlot.innerHTML = '';
    lastresult.innerHTML = `${11 - numGuess}`;
    guessFild.removeAttribute('disabled');
    result.removeChild(p);
    lowandHeigh.innerHTML = '';
    playGame = true;
  });
}
