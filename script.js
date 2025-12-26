"use strict";

// selecting dom elements;

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");

const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Initiating a game.
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

let scores = [0, 0];
let currentScore = 0;

let activePlayer = 0;

let playing = true;

const newGame = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  scores = [0, 0];

  activePlayer = 0;

  diceEl.classList.add("hidden");

  playing = true;

  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};

const switchPlayers = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

btnNew.addEventListener("click", newGame);

// Generate Random Dice Roll
btnRoll.addEventListener("click", () => {
  if (playing) {
    diceEl.classList.remove("hidden");
    let dice = Math.trunc(Math.random() * 6) + 1;

    // Display dice Roll
    diceEl.src = `dice-${dice}.png`;
    // console.log(dice, activePlayer);

    // check the dice
    if (dice !== 1) {
      // add dice roll to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayers();
    }
  }
});

btnHold.addEventListener("click", () => {
  if (playing) {
    // add current score to active player's totalscore
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // check if the totalscore is greater than 100, if so end the game
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--active");
    } else {
      // switch the player
      switchPlayers();
    }
  }
});
