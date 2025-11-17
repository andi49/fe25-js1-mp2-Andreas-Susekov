document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const userName = document.querySelector("input").value;
  document.querySelector("h1").textContent = "🐖" + userName + "🐖";

  document.querySelector("input").style.display = "none";
  document.querySelector("button").style.display = "none";
  document.getElementById("myList").classList.remove("listOfNums");
  document.querySelectorAll(".buttonPressUser").forEach((btn) => {
    btn.classList.remove("buttonPressUser");
  });
});

const playBtn = document.querySelector("#btnpresUserGame");
const SaveButton = document.querySelector("#btnpresUserSave");
const restartButton = document.querySelector("#btnpresUserRestart");
const diceLandedatEL = document.querySelector("#diceLandedat");
const currentPlayerDiceTotal = document.querySelector("#pointNow");
const currentPlayerTotalPoint = document.querySelector("#totalPoint");
const roundCounterGame = document.querySelector('#roundsCounter')

let total = 0;
let savedTotal = 0;
let rounds = 0;

function dice() {
  const value = Math.floor(Math.random() * 6) + 1;
  return value;
}

playBtn.addEventListener("click", rollDice);

function rollDice() {
  const valuedice = dice();
  new Audio('/assets/sounds/dice.mp3').play();
  diceLandedatEL.innerText = valuedice;
  clacDiceValue(valuedice);
  console.log("klickat");
  rounds++;
  roundCounterGame.innerText = rounds

  if (valuedice === 1) {
   total = 0
     currentPlayerDiceTotal.innerText = total
  }
}

function clacDiceValue(value) {
  total += value;
  console.log(total);
  currentPlayerDiceTotal.innerText = total
}

SaveButton.addEventListener('click', savepoints) 

function savepoints() {

  savedTotal += total;

  currentPlayerTotalPoint.innerText = savedTotal;

  total = 0;
  currentPlayerDiceTotal.innerText = total;

  console.log("Points saved");

  if (savedTotal >= 100) {
    alert("you won");
    playBtn.disabled = true;
  }
}

  

restartButton.addEventListener('click', restart)

function restart() {
    document.location.reload()
}