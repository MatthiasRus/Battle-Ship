import { Ship, GameBoard, Player, Computer } from './gameClasses.js';

let player = new Player();
let computer = new Computer();
let selectedShip = new Ship(3); // Fixed ship length for testing
let direction = "Horizontal";

// Create the UI grid
const gameBoardElement = document.getElementById('gameBoard');

// Draw the grid
function drawGrid() {
  gameBoardElement.innerHTML = '';  // Clear any existing grid
  for (let row = 0; row < 10; row++) { // Adjusted to 10x10 grid
    for (let col = 0; col < 10; col++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.row = row;
      cell.dataset.col = col;
      
      // Add event listener to handle click
      cell.addEventListener('click', (e) => handleCellClick(e, row, col));
      
      gameBoardElement.appendChild(cell);
    }
  }
}

drawGrid();

// Handle cell click event for placing ships
function handleCellClick(event, row, col) {
  const placed = player.playerBoard.placeShip([row, col], direction, selectedShip);

  if (placed) {
    event.target.classList.add('ship'); // Mark cell as a ship location
    console.log(`Ship placed at [${row}, ${col}]`);
  } else {
    console.log("Invalid placement");
  }
}

// Handle random computer move
document.getElementById('randomMove').addEventListener('click', () => {
  computer.makeRandomMove();
  updateGrid();
});

// Update the grid to show hit/miss
function updateGrid() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    const row = cell.dataset.row;
    const col = cell.dataset.col;
    const value = player.playerBoard.grid[row][col];

    if (value === 'Hit') {
      cell.classList.add('hit');
    } else if (value === 'Miss') {
      cell.classList.add('miss');
    }
  });
}
