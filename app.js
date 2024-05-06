const playBtn = document.getElementById("playBtn");
const player1NameInput = document.querySelector("#player1NameInput");
const player2NameInput = document.querySelector("#player2NameInput");
const playerSelectContainer = document.querySelector("#playerSelect-container");
const playerBarSection = document.querySelector("#playerBarSection");
const gameSection = document.querySelector("#gameSection");
const player1Name = document.querySelector(".player1Name");
const player2Name = document.querySelector(".player2Name");

const gridBoxAll = document.querySelectorAll(".gridBox");

let player1 = "";
let player2 = "";

playBtn.addEventListener("click", (e) => {
  e.preventDefault();
  player1 = player1NameInput.value;
  player2 = player2NameInput.value;

  if (player1NameInput.value !== "" && player2NameInput.value !== "") {
    // adds names to playerBarSection

    player1Name.innerText = `Player 1: ${player1.toUpperCase()}`;
    player2Name.innerText = `Player 2: ${player2.toUpperCase()}`;

    // removes playerSelectContainer

    playerSelectContainer.classList.remove("playerSelect-container");
    playerSelectContainer.classList.add("playerSelect-containerNONE");

    // adds playerBarSection

    playerBarSection.classList.remove("playerBarSectionNONE");
    playerBarSection.classList.add("playerBarSection");

    // adds gameSection

    gameSection.classList.remove("gameSectionNONE");
    gameSection.classList.add("gameSection");

    // SHOWS FIRST TURN

    playerTurnP.innerText = `${player1.toUpperCase()}'S TURN`;
  } else {
    alert("please fill out player names");
  }
});

// PLAYER TURN

const playerTurnP = document.getElementById("playerTurn");
const gameOverSection = document.querySelector(".gameOverSection");

let playerTurn = playerTurnP.innerText;

// GAME

const game = document.getElementById("game");
playerTurn = "Player1";

turnCount = "";

// PLAYER 1 TURN

game.addEventListener("click", (e) => {
  if (turnCount < 9) {
    let target = e.target;
    if (playerTurn == "Player1") {
      if (target.innerText !== "") {
        console.log("taken");
      } else {
        target.innerText = "X";
        playerTurn = "Player2";
        playerTurnP.innerText = `${player2.toUpperCase()}'S TURN`;
        turnCount++;
      }
    }
  }
  if (turnCount == 9) {
    let gameOverAlert = document.createElement("p");
    gameOverAlert.innerText = "GAME OVER";
    gameOverAlert.className = "gameOverAlert";

    gameOverSection.appendChild(gameOverAlert);
  }
});

// PLAYER 2 TURN

game.addEventListener("click", (e) => {
  if (turnCount < 9) {
    let target = e.target;
    if (playerTurn == "Player2") {
      if (target.innerText !== "") {
        console.log("taken");
      } else {
        target.innerText = "O";
        playerTurn = "Player1";
        playerTurnP.innerText = `${player1.toUpperCase()}'S TURN`;
        turnCount++;
      }
    }
  }
});

// function to check if boxs are all filled

// function boxesFilled() {
//   if (turnCount < 9) {
//     for (let grid of gridBoxAll) {
//       if (grid.innerText !== "") {
//         return true;
//       } else if (grid.innerText == "X" || grid.innerText == "O") {
//         return false;
//       }
//     }
//   } else {
//     alert("GAME OVER");
//   }
// }

const btnChoiceContainer = document.querySelector("#btnChoice-container");
const restartGameBtn = document.querySelector(".restartGameBtnNONE");
const teamChangeBtn = document.querySelector(".teamChangeBtnNONE");
const settingsIcon = document.querySelector(".material-symbols-outlined");

const leaderBoard = document.querySelector("#leaderBoard-container");

const winnerText = document.querySelector("#w");
const toDeleteText = document.querySelectorAll(".deleteText");

// settingsIcon.addEventListener("click", () => {
//   btnChoiceContainer.classList.remove("btnChoice-containerNONE");
//   btnChoiceContainer.classList.add("btnChoice-container");

//   restartGameBtn.classList.remove("restartGameBtnNONE");
//   restartGameBtn.classList.add("restartGameBtn");

//   teamChangeBtn.classList.remove("teamChangeBtnNONE");
//   teamChangeBtn.classList.add("teamChangeBtn");

//   settingsIcon.id = "newSettingsIcon";

//   const newSettingsIcon = document.querySelector("#newSettingsIcon");

//   newSettingsIcon.addEventListener("click", () => {
//     btnChoiceContainer.classList.remove("btnChoice-container");
//     btnChoiceContainer.classList.add("btnChoice-containerNONE");

//     restartGameBtn.classList.remove("restartGameBtn");
//     restartGameBtn.classList.add("restartGameBtnNONE");

//     teamChangeBtn.classList.remove("teamChangeBtn");
//     teamChangeBtn.classList.add("teamChangeBtnNONE");
//   });
// });

function settingsClickOpen() {
  btnChoiceContainer.classList.remove("btnChoice-containerNONE");
  btnChoiceContainer.classList.add("btnChoice-container");

  restartGameBtn.classList.remove("restartGameBtnNONE");
  restartGameBtn.classList.add("restartGameBtn");

  teamChangeBtn.classList.remove("teamChangeBtnNONE");
  teamChangeBtn.classList.add("teamChangeBtn");
}

function settingsClickClose() {
  btnChoiceContainer.classList.remove("btnChoice-container");
  btnChoiceContainer.classList.add("btnChoice-containerNONE");

  restartGameBtn.classList.remove("restartGameBtn");
  restartGameBtn.classList.add("restartGameBtnNONE");

  teamChangeBtn.classList.remove("teamChangeBtn");
  teamChangeBtn.classList.add("teamChangeBtnNONE");
}

function leaderBoardClickOpen() {
  leaderBoard.classList.remove("leaderboard-containerNONE");
  leaderBoard.classList.add("leaderboard-container");

  winnerText.classList.remove("wNONE");
  winnerText.classList.add("w");

  winnerText.innerText = "PREVIOUS WINNERS:";

  for (let item of toDeleteText) {
    item.classList.remove("deleteText");
    item.classList.add("deleteTextNONE");
  }
}

function leaderBoardClickClose() {
  leaderBoard.classList.remove("leaderboard-container");
  leaderBoard.classList.add("leaderboard-containerNONE");

  winnerText.classList.remove("w");
  winnerText.classList.add("wNONE");
  winnerText.innerText = "W";

  for (let item of toDeleteText) {
    item.classList.remove("deleteTextNONE");
    item.classList.add("deleteText");
  }
}

settingsIcon.addEventListener("click", () => {
  if (btnChoiceContainer.className == "btnChoice-containerNONE") {
    settingsClickOpen();
  } else {
    settingsClickClose();
  }
});

leaderBoard.addEventListener("click", () => {
  if (leaderBoard.className == "leaderboard-containerNONE") {
    leaderBoardClickOpen();
  } else {
    leaderBoardClickClose();
  }
});
