'use strict';

//////////////////////////////
// 82 PROJECT #3: Pig Game
//////////////////////////////
// 83 Rolling The Dice

/* 
// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); //this property works as the same as the above (querySelector), but since is it expects just IDs, we don't need the '#'
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions - both score set to zero and dice was hidden
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0; // here we set the value (not the HTML text as above) to the current score. We need it store in a variable outside the handler function to avoid being reset every time the event (click) occurs

//Rolling dice function
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // 2. Display the dice
  diceEl.classList.remove('hidden'); //don't forget to NOT include '.' on class name
  diceEl.src = `dice-${dice}.png`; // here we can dynamically load the six dice images, passing the path through a template literal (or template strings) and adding in it the expression placeholder with the same random dice number

  // 3. Check for rolled 1: if true, switch to next player
  if (dice != 1) {
    //Add dice to current score
    currentScore += dice; //currentScore = currentScore + dice
    current0El.textContent = currentScore; // CHANGE LATER
    // Switch next player
  }
});
 */

//////////////////////////////
// 84 Switching the Active Player

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); //this property works as the same as the above (querySelector), but since is it expects just IDs, we don't need the '#'
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions - both score set to zero and dice was hidden
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0]; // that represents the total score, and the two elements in the array means the total scores of the two players
let currentScore = 0; // here we set the value (not the HTML text as above) to the current score. We need it store in a variable outside the handler function to avoid being reset every time the event (click) occurs
let activePlayer = 0;

//Rolling dice function
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // 2. Display the dice
  diceEl.classList.remove('hidden'); //don't forget to NOT include '.' on class name when .classList
  diceEl.src = `dice-${dice}.png`; // here we can dynamically load the six dice images, passing the path through a template literal (or template strings) and adding in it the expression placeholder with the same random dice number

  // 3. Check for rolled 1
  if (dice !== 1) {
    //Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore; // here we are dynamically setting the current score according to the active player
  } else {
    // Switch next player
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    currentScore = 0; // here we are reseting the current player's score as soon as the 1 is rolled
    activePlayer = activePlayer === 0 ? 1 : 0; // here we are switching the player: since we started setting activePlayer to 0, if we roll number 1, then the current player will became the player 1 (player 2), and in the next number 1 rolled, the active player will became the 0 and so on - these numbers refers to the playes current class name ending (current--0 and current--1)
    player0El.classList.toggle('player--active'); //this property add the class if its not there and remove if its in the HTML tag - initially the player 0 has this class and player 1 has not, so here the class will be removed ...
    player1El.classList.toggle('player--active'); // ... and here the class will be added
  }
});
