const checkRow = (rowArr, letter) => {
  for (let i = 0; i < 3; i++) {
    return rowArr[i] !== letter ? false : true
  }
}

const checkColumn = (gameBoardMatrix, columIndex, letter) => {
  for (let i = 0; i < 3; i++) {
    return gameBoardMatrix[i][columIndex] !== letter ? false : true
  }
}

const ticTacToeWinner = (gameBoardMatrix, letter) => {

  let rowWin = checkRow(gameBoardMatrix[0], letter) || checkRow(gameBoardMatrix[1], letter) || checkRow(gameBoardMatrix[2], letter);
  let colWin = checkColumn(gameBoardMatrix, 0, letter) || checkColumn(gameBoardMatrix, 1, letter) || checkColumn(gameBoardMatrix, 2, letter);

  let diagonalWinLeftToRight = (gameBoardMatrix[0][0] === letter && gameBoardMatrix[1][1] === letter && gameBoardMatrix[2][2] === letter)
  let diagonalWinLeftToRight = (gameBoardMatrix[0][2] === letter && gameBoardMatrix[1][1] === letter && gameBoardMatrix[2][0] === letter)

  return rowWin || colWin || diagonalWinLeftToRight || diagonalWinLeftToRight;
}

const board = [['O', '-', 'X'], ['-', 'O', '-'], ['-', 'X', 'O']];
ticTacToeWinner(board, 'X');
ticTacToeWinner(board, 'O');
