// const game = document.querySelector(".game");

// function player1Board() {
//   for (let i = 0; i < 3; i++) {
//     for (let i = 0; i < 3; i++) {
//       const cell = document.createElement("div");
//       cell.classList.add("cell");
//       const p = document.createElement("p");
//       p.innerText = "X";

//       cell.appendChild(p);
//       game.appendChild(cell);
//     }
//   }
// }

// function player2Borad() {
//   for (let i = 0; i < 3; i++) {
//     for (let i = 0; i < 3; i++) {
//       const cell = document.createElement("div");
//       cell.classList.add("cell");
//       //   const p = document.createElement("p");
//       //   p.innerText = "X";
//       cell.innerText = "X";

//       //   cell.appendChild(p);
//       game.appendChild(cell);
//     }
//   }
// }

// player2Borad();

const game = document.querySelector(".game");
const player1Btn = document.querySelector("#player1");
const player2Btn = document.querySelector("#player2");

function createPlayer1Board() {
  for (let i = 0; i < 3; i++) {
    for (let i = 0; i < 3; i++) {
      const newX = document.createElement("div");

      newX.innerText = "X";

      game.appendChild(newX);
    }
  }
}

function createPlayer2Board() {
  for (let i = 0; i < 3; i++) {
    for (let i = 0; i < 3; i++) {
      const newO = document.createElement("div");

      newO.innerText = "O";

      game.appendChild(newO);
    }
  }
}

player1Btn.addEventListener("click", function () {
  createPlayer1Board();
});

player2Btn.addEventListener("click", function () {
  createPlayer2Board();
});
