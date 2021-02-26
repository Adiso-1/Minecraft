//! Query Selectors
const landPage = document.querySelector('#land-page');
const world = document.querySelector('#world');
const startBtn = document.querySelector('.start-btn');
const resetBtn = document.querySelector(".reset-world");
const mainGame = document.querySelector('.main');

//! Dynamic 2D Matrix
const matrix = [];
function matrixBuilder(rowsArg, colsArg) {
    mainGame.style.gridTemplateRows = `repeat(${rowsArg},1fr)`;
    mainGame.style.gridTemplateColumns = `repeat(${colsArg},1fr)`;
  for (let rows = 0; rows < rowsArg; rows++) {
    matrix[rows] = [];
    for (let cols = 0; cols < colsArg; cols++) {
      const tile = document.createElement("div");
      tile.setAttribute("rows", rows);
      tile.setAttribute("cols", cols);
      tile.classList.add("sky");
      mainGame.appendChild(tile);
      matrix[rows][cols] = tile;
    }
  }
}
const arrayElement = ["sky", "cloud", "grass", "leaves", "wood", "stone","soil"];

//! Buttons
startBtn.addEventListener('click', () => {
  landPage.style.display = "none";
  world.style.display = "flex";
  matrixBuilder(20, 30);
  //* inject explaining - row,untilRow,col(default = left screen),untilCol(default = right screen),element
  inject("grass", 15, 16);
  inject("soil", 16, 20);
  inject("wood", 12, 15, 23, 24);
  inject("leaves", 9, 12, 21, 26);
  
  //* Creating side soones with for loop
  for (let i = 0; i < 4; i++) {
    inject("stone", 11 + i, 15, 0 + i, 1 + i);
  }
  
  //* Creating clouds (row,untilRow,col,untilCol)
  createClouds(3, 5, 4, 6);
  createClouds(2, 4, 17, 19);
})

resetBtn.addEventListener('click', () => {
  landPage.style.display = "flex";
  world.style.display = 'none';
  mainGame.innerHTML = '';
})

//! Dynamic adding elements
function inject(element,row,untilRow,col = 0,untilCol = matrix[0].length) {
  for (let i = row; i < untilRow; i++) {
    for (let j = col; j < untilCol; j++) {
      matrix[i][j].classList.value = element;
    }
  }
}
function createClouds (row,untilRow,col,untilCol) {
  for (let i = 0; i < untilRow - row ; i++) {
    inject("cloud", row + i, untilRow, col - i, untilCol + i);
  }
}
