// Dynamic 2D Matrix
const matrix = [];
function matrixBuilder(rowsArg, colsArg) {
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


// Query Selectors
const landPage = document.querySelector('#land-page');
const world = document.querySelector('#world');
const startBtn = document.querySelector('.start-btn');
const resetBtn = document.querySelector(".reset-world");
const mainGame = document.querySelector('.main');
const cloud = document.createElement('div');
cloud.classList.add("cloud");
const grass = document.createElement('div');
grass.classList.add("grass");
const soil = document.createElement('div');
soil.classList.add("soil");

// Buttons
startBtn.addEventListener('click', () => {
    landPage.style.display = 'none';
    world.style.display = 'flex';
    matrixBuilder(20,30)
    injectClouds();
    injectGrass(15);
    injectSoil();
})
resetBtn.addEventListener('click', () => {
    landPage.style.display = "flex";
    world.style.display = 'none';
    mainGame.innerHTML = '';
})


//! Create clouds - NOT DONE
function injectClouds() {
    for (let i = 2; i < 5; i++) {
        for (let j = 3; j < 8; j+=2) {
            matrix[i][j].classList.add('cloud');
        }        
    }
}
// Create Grass
function injectGrass(row) {
  for (let i = row; i < row + 1; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j].classList.value = grass.classList.value;
    }
  }
}
// Create Soil
function injectSoil() {
    for (let i = 16; i < 20; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j].classList.value = soil.classList.value;            
        }    
    }
}