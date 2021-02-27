const pickedElement = {
  grass: 0,
  leaves: 0,
  wood: 0,
  stone: 0,
  soil: 0,
};

//! Query Selectors
const landPage = document.querySelector('#land-page');
const world = document.querySelector('#world');
const startBtn = document.querySelector('.start-btn');
const resetGameBtn = document.querySelector(".reset-game");
const resetWorldBtn = document.querySelector(".reset-world");
const mainGame = document.querySelector('.main');
const storageStone = document.querySelector(".storage-box-stone");
const storageLeaves = document.querySelector(".storage-box-leaves");
const storageWood = document.querySelector(".storage-box-wood");
const storageGrass = document.querySelector(".storage-box-grass");
const storageSoil = document.querySelector(".storage-box-soil");
const axe = document.querySelector(".axe");
const pickaxe = document.querySelector(".pickaxe");
const shovel = document.querySelector(".shovel");

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
      // tile.setAttribute("type",'tile');
      tile.classList.add("sky");
      mainGame.appendChild(tile);
      matrix[rows][cols] = tile;
    }
  }
}

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

resetGameBtn.addEventListener('click', () => {
  location.reload();
})
// resetWorldBtn.addEventListener('click', () => {
//   landPage.style.display = "flex";
//   world.style.display = 'none';
//   mainGame.innerHTML = '';
// })

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

//! Event listener to tools clicked
let axeClicked;
let pickaxeClicked;
let shovelClicked;
axe.addEventListener('click', () => {
  if (axeClicked) {
    axeClicked = false;
    axe.style.background = '#000';
  } else {
    axeClicked = true;
    axe.style.background = 'blue';
    pickaxeClicked = false;
    pickaxe.style.background = '#000';
    shovelClicked = false;
    shovel.style.background = '#000';
  }
})
pickaxe.addEventListener('click', () => {
  if (pickaxeClicked) {
    pickaxeClicked = false;
    pickaxe.style.background = '#000';
  } else {
    axeClicked = false;
    axe.style.background = '#000';
    pickaxeClicked = true;
    pickaxe.style.background = 'blue';
    shovelClicked = false;
    shovel.style.background = '#000';
  }
})

shovel.addEventListener('click', () => {
  if (shovelClicked) {
    shovelClicked = false;
    shovel.style.background = '#000';
  } else {
    axeClicked = false;
    axe.style.background = '#000';
    pickaxeClicked = false;
    pickaxe.style.background = '#000';
    shovelClicked = true;
    shovel.style.background = 'blue';
  }
})

//! Event listener to collect elements
mainGame.addEventListener('click',(e) => {
  if (e.target.className === "stone" && pickaxeClicked) {
    e.target.className = "sky";
    pickedElement.stone++;
    counter = pickedElement.stone;
    storageStone.innerHTML = counter;
  }
  if (e.target.className === "leaves" && axeClicked) {
    e.target.className = "sky";
    pickedElement.leaves++;
    counter = pickedElement.leaves;
    storageLeaves.innerHTML = counter;
  }
  if (e.target.className === "wood" && axeClicked) {
    e.target.className = "sky";
    pickedElement.wood++;
    counter = pickedElement.wood;
    storageWood.innerHTML = counter;
  }
  if (e.target.className === "grass" && shovelClicked) {
    e.target.className = "sky";
    pickedElement.grass++;
    counter = pickedElement.grass;
    storageGrass.innerHTML = counter;
  }
  if (e.target.className === "soil" && shovelClicked) {
    e.target.className = "sky";
    pickedElement.soil++;
    counter = pickedElement.soil;
    storageSoil.innerHTML = counter;
  }
})
//! Capture event for placing a cell in the matrix
let stoneClicked;
storageStone.addEventListener('click', (e) => {
  if (storageStone.innerHTML > 0) {
    stoneClicked = true;
    e.target.style.border = "1px solid blue";
  } else {
    e.target.style.border = "1px solid red";
  }
  mainGame.addEventListener('click', (e) => {
    if (stoneClicked === true) {
      matrix[e.target.attributes.rows.value][e.target.attributes.cols.value].classList.value = 'stone';
      pickedElement.stone--;
      storageStone.innerHTML = pickedElement.stone;
      stoneClicked = false;
    }
  })
})
