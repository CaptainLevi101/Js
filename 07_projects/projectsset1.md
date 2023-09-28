  ## project1
  const colors = ['blue', 'yellow', 'white', 'grey'];
const colorElements = colors.map(color => document.getElementById(color));

colors.forEach((color, index) => {
  colorElements[index].addEventListener('click', function () {
    document.body.style.backgroundColor = color;
  });
});

## project2
const form = document.querySelector('form');
console.log(form);
form.addEventListener('submit', function (e) {
  e.preventDefault();
  //now what all i want is values
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.getElementById('weight').value);
  console.log(height);
  const result = document.querySelector('#results');
  if (height == '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'Please enter correct Height';
  }
  if (weight == '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'Please enter correct weight';
  } else {
    const div = document.createElement('div');
    const bmi = (weight / (height * height)) * 10000;
    div.appendChild(document.createTextNode(bmi));
    form.appendChild(div);
  }
});

## project3
const clock = document.getElementById('clock');

function upDate() {
  const ne = document.createElement('span');
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const seconds = date.getSeconds();
  clock.innerHTML = `${hour} : ${min} : ${seconds}`;
}

// upDate(ne);

// Use setInterval to call upDate every second (1000 milliseconds)
setInterval(upDate, 1000);

## project 4
let num = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    if (!validateGuess(guess)) {
      alert('Please enter a valid number');
    }
  });
}
function validateGuess(guess) {
  // validation of guesses
  if (guess > 100 || guess < 0 || isNaN(guess)) {
    return false;
  }
  prevGuess.push(guess);
  if (numGuess == 11) {
    displayguess(guess);
    displayMessage(`Game Over.Random number was ${num}`);
    endGame();
  } else {
    displayguess(guess);
    checkGuess(guess);
  }
  return true;
}
function checkGuess(guess) {
  if (guess == num) {
    displayMessage('You guessed it right');
    endGame();
  } else if (guess < num) {
    displayMessage('Number is too low');
  } else {
    displayMessage('Number is too high');
  }
}
function displayMessage(message) {
  //all dom manipulation would be done in here
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}
function displayguess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += ` ${guess}`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    num = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id=newGame> Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

