import {GameBoard} from "../src/modules/gameBoard.js";

test('Basic Test',() => {
  const gameBoard = new GameBoard();
expect(gameBoard.placeShip([2,3],"vertical",{length : 3})).toBeTruthy();
});


test("Basic Test-2",()=> {
  const gameBoard = new GameBoard();
  expect(gameBoard.placeShip([0,0],"Horizontal",{length : 11})).toBeFalsy();
})

test("Place ship Horizontally at the edge of the grid", () => {
  const gameBoard = new GameBoard();
  expect(gameBoard.placeShip([0, 7], "Horizontal", { length: 4 })).toBeFalsy();
});

test("Place ship vertically within bounds", () => {
  const gameBoard = new GameBoard();
  expect(gameBoard.placeShip([5, 5], "vertical", { length: 3 })).toBeTruthy();
});

test("Place ship Horizontally within bounds", () => {
  const gameBoard = new GameBoard();
  expect(gameBoard.placeShip([0, 0], "Horizontal", { length: 4 })).toBeTruthy();
});

test("Place multiple ships without overlapping", () => {
  const gameBoard = new GameBoard();
  expect(gameBoard.placeShip([0, 0], "Horizontal", { length: 3 })).toBeTruthy();
  expect(gameBoard.placeShip([2, 2], "vertical", { length: 4 })).toBeTruthy();
});

test("Place ship with out-of-bound coordinates", () => {
  const gameBoard = new GameBoard();
  expect(gameBoard.placeShip([11, 0], "vertical", { length: 2 })).toBeFalsy();
})

test("Place ship vertically at the bottom edge of the grid", () => {
  const gameBoard = new GameBoard();
  expect(gameBoard.placeShip([8, 0], "vertical", { length: 3 })).toBeFalsy();
});



test('Receive attack that hits a ship', () => {
  const gameBoard = new GameBoard();
  gameBoard.placeShip([1, 1], "Horizontal", { length: 3 });
  expect(gameBoard.receiveAttack([1, 1])).toBe('Hit');
});

test('Receive attack that misses', () => {
  const gameBoard = new GameBoard();
  expect(gameBoard.receiveAttack([0, 0])).toBe('Miss');
});

test('Receive attack on already hit spot', () => {
  const gameBoard = new GameBoard();
  gameBoard.receiveAttack([1, 1]);
  expect(gameBoard.receiveAttack([1, 1])).toBe(false);
});

test('Receive attack out of bounds', () => {
  const gameBoard = new GameBoard();
  expect(gameBoard.receiveAttack([-1, 0])).toBe(false);
  expect(gameBoard.receiveAttack([10, 0])).toBe(false);
  expect(gameBoard.receiveAttack([0, 10])).toBe(false);
});

test('All ships are sunk', () => {
  const gameBoard = new GameBoard();
  gameBoard.placeShip([0, 0], 'Horizontal', { length: 1 });
  gameBoard.receiveAttack([0, 0]);
  expect(gameBoard.allShipsSank()).toBe(true);
});

test('Not all ships are sunk', () => {
  const gameBoard = new GameBoard();
  gameBoard.placeShip([0, 0], 'Horizontal', { length: 1 });
  expect(gameBoard.allShipsSank()).toBe(false);
});