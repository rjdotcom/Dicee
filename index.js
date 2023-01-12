var randomNumber1 = Math.floor(Math.random() * 7);
randomNumber1 += 1;
var randomNumber2 = Math.floor(Math.random() * 7);
randomNumber2 += 1;

var palyer1 = document.querySelector(".img1");
var palyer2 = document.querySelector(".img2");

const winner1 = "Player 1 won 🚩";
const winner2 = "Player 2 won 🚩";
const draw = "Draw 🥶";

if (randomNumber1 === 1) {
  palyer1.setAttribute("src", "images/dice1.png");
} else if (randomNumber1 === 2) {
  palyer1.setAttribute("src", "images/dice2.png");
} else if (randomNumber1 === 3) {
  palyer1.setAttribute("src", "images/dice3.png");
} else if (randomNumber1 === 4) {
  palyer1.setAttribute("src", "images/dice4.png");
} else if (randomNumber1 === 5) {
  palyer1.setAttribute("src", "images/dice5.png");
} else if (randomNumber1 === 6) {
  palyer1.setAttribute("src", "images/dice6.png");
}

if (randomNumber2 === 1) {
  palyer2.setAttribute("src", "images/dice1.png");
} else if (randomNumber2 === 2) {
  palyer2.setAttribute("src", "images/dice2.png");
} else if (randomNumber2 === 3) {
  palyer2.setAttribute("src", "images/dice3.png");
} else if (randomNumber2 === 4) {
  palyer2.setAttribute("src", "images/dice4.png");
} else if (randomNumber2 === 5) {
  palyer2.setAttribute("src", "images/dice5.png");
} else if (randomNumber2 === 6) {
  palyer2.setAttribute("src", "images/dice6.png");
}

// Winner teller.
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = winner1;
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = winner2;
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = draw;
}
