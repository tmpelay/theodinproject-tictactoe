function createGameboard() {
  const boardSize = 3;
  let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  return { boardSize, board };
}

function createPlayer(player) {
  const symbol = player;
  return { symbol };
}

const myBoard = createGameboard();
const playerOne = createPlayer("X");
const playerTwo = createPlayer("O");

const Game = (function () {
  const renderBoard = () => {
    const boardButtons = document.getElementsByClassName("board__button");
    for (let button of boardButtons) {
      button.textContent = myBoard.board[button.id];
    }
  };
  return { renderBoard };
})();

Game.renderBoard();
