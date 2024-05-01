// PLAYER 1 AND PLAYER 2 BUTTONS (FILLS X AND O)

// const game = document.querySelector(".game");
// const player1Btn = document.querySelector("#player1");
// const player2Btn = document.querySelector("#player2");

// function createPlayer1Board() {
//   for (let i = 0; i < 3; i++) {
//     for (let i = 0; i < 3; i++) {
//       const newX = document.createElement("div");

//       newX.innerText = "X";

//       game.appendChild(newX);
//     }
//   }
// }

// function createPlayer2Board() {
//   for (let i = 0; i < 3; i++) {
//     for (let i = 0; i < 3; i++) {
//       const newO = document.createElement("div");

//       newO.innerText = "O";

//       game.appendChild(newO);
//     }
//   }
// }

// player1Btn.addEventListener("click", function () {
//   createPlayer1Board();
// });

// player2Btn.addEventListener("click", function () {
//   createPlayer2Board();
// });

// ===============================================

// make a dictionary that holds board cell value(x or o)
// 2 functions:
// when its x's turn
// when its o's turn
// make a func that checks  player turn then runs one of x function

// store player name and score with dictionary and reset after game or save in mem

const playBtn = document.getElementById("playBtn");
const player1NameInput = document.querySelector("#player1NameInput");
const player2NameInput = document.querySelector("#player2NameInput");
const playerSelectContainer = document.querySelector("#playerSelect-container");
const playerBarSection = document.querySelector("#playerBarSection");
const gameSection = document.querySelector("#gameSection");

// DIVS

const gridBoxAll = document.querySelectorAll(".gridBox");

// places X

let gridBoxList = {
  box1: "",
  box2: "",
  box3: "e",
  box4: "",
  box5: "e",
  box6: "",
  box7: "e",
  box8: "",
  box9: "",
};

function getsBoxKey() {
  gameSection.addEventListener("click", (e) => {
    return e.target.id;
  });
}

// Checks if each box is empty

function checksBox() {
  let valueList = Object.values(gridBoxList);

  for (i = 0; i < valueList.length; i++) {
    if (valueList[i] == "") {
      console.log(`Box ${i + 1} is open`);
      boxDiv.classList.remove("gridBox");
      boxDiv.classList.add("open");
    } else {
      console.log(`Box ${i + 1} is taken`);
    }
  }
}

checksBox();

function addsX() {}

playBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (player1NameInput.value == "" && player2NameInput.value == "") {
    console.log(player1NameInput.value);
    console.log(player2NameInput.value);

    console.log(gridBoxList);

    // removes playerSelectContainer

    playerSelectContainer.classList.remove("playerSelect-container");
    playerSelectContainer.classList.add("playerSelect-containerNONE");

    // adds playerBarSection

    playerBarSection.classList.remove("playerBarSectionNONE");
    playerBarSection.classList.add("playerBarSection");

    // adds gameSection

    gameSection.classList.remove("gameSectionNONE");
    gameSection.classList.add("gameSection");
  } else {
    alert("please fill out player names");
  }
});
