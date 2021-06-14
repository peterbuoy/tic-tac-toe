const GAMEBOARD = document.getElementById('gameboard');

let gameboardArray = ['x', 'x', 'o',
                      'o', 'o', 'x',
                      'x','o', 'x']

const displayController = (function() {
  gameboardFragment = document.createDocumentFragment();
  while(GAMEBOARD.firstChild) {
    GAMEBOARD.firstChild.remove();
  }
  for(let i = 0; i < 9; i++) {
    let square = document.createElement('button');
    square.textContent = gameboardArray[i];
    square.classList.add('square')
    square.value = i;
    gameboardFragment.append(square)
  }
  GAMEBOARD.append(gameboardFragment);
})();

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
 
// game logic while loop should keep going until 
// there are no empty strings in gameboardArray
// gameboardArray.includes("");
// OR 3 X's or O's in a row (multiple ways to check)