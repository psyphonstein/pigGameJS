"use strict";

const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");

const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const newGame = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add("hidden");
};

newGame();

let currentScore = 0;

btnNew.addEventListener("click", newGame);

btnRoll.addEventListener("click", () => {
  let dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove("hidden");
  if (dice === 1) {
    console.log("switching player");
    diceEl.src = `dice-${dice}.png`;
  } else {
    console.log(dice);
    diceEl.src = `dice-${dice}.png`;
    currentScore += dice;
    current0El.textContent = currentScore;
  }
});

btnHold.addEventListener("click", () => {});
