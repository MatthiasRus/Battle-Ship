export class GameBoard{
  constructor(){
    this.grid = Array.from({ length: 10 }, () => Array(10).fill(0));
  }

placeShip(startCoordinate, direction, ship) {
  if (direction === "Horizontal") {
    if (startCoordinate[1] + ship.length > 10) {
      console.log("cannot place ship out of grid ie row wise");
      return false;
    }
    for (let i = 0; i < ship.length; i++) {
      this.grid[startCoordinate[0]][startCoordinate[1] + i] = "Ship";
    }
    return true;
  } else if (direction === "vertical") {
    if (ship.length + startCoordinate[0] > 10) {
      console.log("cannot place ship column wise i.e out of grid");
      return false;
    }
    for (let i = 0; i < ship.length; i++) {
      this.grid[startCoordinate[0] + i][startCoordinate[1]] = "Ship";
    }
    return true;
  }
  return this.grid;
}

receiveAttack(coordinate) {
  const [x, y] = coordinate;

  if (x < 0 || x >= 10 || y < 0 || y >= 10) {
    return false;
  }
  if (this.grid[x][y] === "Hit" || this.grid[x][y] === "Miss") {
    return false;
  } else if (this.grid[x][y] === "Ship") {
    this.grid[x][y] = "Hit";
    return "Hit";
  } else {
    this.grid[x][y] = "Miss";
    return "Miss";
  }
}

allShipsSank() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (this.grid[i][j] === "Ship") {
        return false;
      }
    }
  }
  return true;
}
}
