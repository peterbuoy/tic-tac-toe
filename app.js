const GAMEBOARD = document.getElementById('gameboard');

let boardArray = [['', '', ''],
                  ['', '', ''],
                  ['', '', '']]
let playerFill = 'x';

const clickSquare = (event) => {
  let [row, col] = event.currentTarget.value.split(',');
  row = parseInt(row);
  col = parseInt(col);
  if (boardArray[row][col] != "") return alert('Square already filled!');
  playerFill == 'x' ? playerFill = 'o' : playerFill = 'x'
  boardArray[row][col] = playerFill;
  displayController.updateBoard();
  if(winnerExists()) {
    displayController.newBoard();
    return alert(`${playerFill} wins!`)
  }
  if(boardArray.flat().filter(value => value == '').length == 0) {
    return alert(`You can't even beat yourself off. Give up on your dreams and die.`)
  }
}

// if a winner exists, return true
const winnerExists = () => {
  const checkRows = () => {
    for (let row = 0; row < 3; row++) {
      if ( boardArray[row][0] != "" 
        && boardArray[row].every(square => (square === boardArray[row][0]))) 
      {
        console.log('row win!');
        return true;
      }
    }
  }
  const checkCols = () => {
    for (let col = 0; col < 3; col++) {
      if ( boardArray[0][col] != ""
        && boardArray[0][col] == boardArray[1][col] 
        && boardArray[0][col] == boardArray[2][col]) 
        {
          console.log('col win!');
          return true;
        }
    }
  }
  const checkCross = () => {
    for (let row = 0; row < 3; row++) {
      if (boardArray[1][1] != "" 
          && (boardArray[1][1] == boardArray[0][0] && boardArray[1][1] == boardArray[2][2]
          || boardArray[1][1] == boardArray[2][0] && boardArray[1][1] == boardArray[0][2])) 
      {
        console.log('cross win!');
        return true;
      }
    }
  }
  return checkRows() || checkCols() || checkCross();
}

const displayController = (function() {
  const updateBoard = () => {
    console.log('board updated');
    gameboardFragment = document.createDocumentFragment();
    while(GAMEBOARD.firstChild) {
      GAMEBOARD.firstChild.remove();
    }
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        let square = document.createElement('button');
        square.textContent = boardArray[i][j];
        square.classList.add('square')
        square.value = [i,j];
        gameboardFragment.append(square)
      }
    }
    GAMEBOARD.append(gameboardFragment);
    const SQUARES = document.querySelectorAll('.square')
    console.log(SQUARES);
    SQUARES.forEach(square => square.addEventListener('click', clickSquare));
  }
  const newBoard = () => {
    console.log('new board or something');
    boardArray.forEach(boardRow => boardRow = boardRow.fill(""));
    console.log(boardArray);
    updateBoard();
  }
  return {newBoard, updateBoard}
}
)();

const playerFactory = (name, fillValue) => {
  return {name, fillValue}
}

const gameboard = (function() {
  console.log('gameboard initialization');
  displayController.newBoard();
  displayController.updateBoard();
})();

