export class GameBoard{
  constructor(){
    this.length = 10;
    this.grid = Array.from({ length: this.length }, () => Array(this.length).fill(0));
    this.shipsContainer = [];
    this.missedShots = [];
  }
placeShip(startCoordinate, direction, ship) {
  if (direction === "Horizontal") {
    if (startCoordinate[1] + ship.length > this.length) {
      
      return false;
    }
    for (let i = 0; i < ship.length; i++) {
      this.grid[startCoordinate[0]][startCoordinate[1] + i] = "Ship";
      this.shipsContainer.push(startCoordinate);
      
    }
    return true;
  } 
  else if (direction === "vertical") {
    if (ship.length + startCoordinate[0] > this.length) {
     
      return false;
    }
    for (let i = 0; i < ship.length; i++) {
      this.grid[startCoordinate[0] + i][startCoordinate[1]] = "Ship";
      this.shipsContainer.push(startCoordinate);
    }
    return true;
  }
  return this.grid;
}

receiveAttack(coordinate) {
  const [x, y] = coordinate;

  if (x < 0 || x >= this.length || y < 0 || y >= this.length) {
    return false;
  }
  if (this.grid[x][y] === "Hit" || this.grid[x][y] === "Miss") {
    return false;
  } else if (this.grid[x][y] === "Ship") {
    this.grid[x][y] = "Hit";
    
    return "Hit";
  } else {
    this.grid[x][y] = "Miss";
    this.missedShots.push(coordinate);
    
    return "Miss";
  }
}

allShipsSank() {
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {
      if (this.grid[i][j] === "Ship") {
        return false;
      }
    }
  }
  return true;
}
}
