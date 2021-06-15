const GAMEBOARD = document.getElementById('gameboard');

let gameboardArray = [['x', 'o', 'x'],
                      ['o', 'x', 'o'],
                      ['x', 'o', 'x']]

const displayController = (function() {
  gameboardFragment = document.createDocumentFragment();
  while(GAMEBOARD.firstChild) {
    GAMEBOARD.firstChild.remove();
  }
  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      let square = document.createElement('button');
      square.textContent = gameboardArray[i][j];
      square.classList.add('square')
      square.value = [i,j];
      gameboardFragment.append(square)
    }
  }
  GAMEBOARD.append(gameboardFragment);
})();

const checkBoard = (gameboard) => {
  const checkRows = () => {
    for (let row = 0; row < 3; row++) {
      if(gameboard[row].every(square => (square === gameboard[row][0]))) {
        console.log('row win');
        return true;
      }
    }
  }
  const checkCol = () => {
    for (let col = 0; col < 3; col++) {
      if (gameboard[0][col] == gameboard[1][col] 
        &&gameboard[0][col] == gameboard[2][col]) 
        {
          console.log('col win!');
          return true;
        }
    }
  }
  const checkCross = () => {
    for (let row = 0; row < 3; row++) {
      if (gameboard[0][0] == gameboard[1][1] && gameboard[0][0] == gameboard[2][2]
        ||gameboard[2][0] == gameboard[1][1] && gameboard[0][2] == gameboard[1][1]) {
          console.log('cross win!');
        return true;
      }
    }
  }
  checkCross();
  checkRows();
  checkCol();
}

const gameBoard = (function() {
  function setCurrentPlayer() {

  }
})();

// fillValue is "x" or "o"
const Player = (name, fillValue) => {
  
}

const testClick = (event) => {
  event.currentTarget.style.backgroundColor = 'red';
  console.log('click detected');
}

const SQUARES = document.querySelectorAll('.square')
console.log(SQUARES);
SQUARES.forEach(square => square.addEventListener('click', testClick))
checkBoard(gameboardArray);
 
// game logic while loop should keep going until 
// there are no empty strings in gameboardArray
// gameboardArray.includes("");
// OR 3 X's or O's in a row (multiple ways to check)