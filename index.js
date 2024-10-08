function createGameboard() {
  let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

  const setPlay = (player, cell) => (board[cell] = player);

  return { board, setPlay };
}

function createPlayer(player) {
  const symbol = player;
  return { symbol };
}

const myBoard = createGameboard();
const playerOne = createPlayer("X");
const playerTwo = createPlayer("O");

const Game = (function () {
  const boardButtons = document.getElementsByClassName("board__button");
  const players = [playerOne, playerTwo];
  let curentPlayer = players[0];

  const renderBoard = () => {
    for (let button of boardButtons) {
      button.textContent = myBoard.board[button.id];
    }
  };

  let playsCounter = 0;
  const updateBoard = () => {
    for (let button of boardButtons) {
      button.addEventListener("click", (e) => {
        myBoard.setPlay(curentPlayer.symbol, button.id);
        playsCounter += 1;
        curentPlayer = players[playsCounter % 2];
        renderBoard();
      });
    }
  };

  return { updateBoard };
})();

Game.updateBoard();
