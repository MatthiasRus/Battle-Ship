import {Ship} from "../src/modules/ShipModule.js";
let randomNumber = Math.ceil(Math.random()*4)+2;
let length =  randomNumber >= 2 && randomNumber <=5 ? randomNumber : Error;

const ship = new Ship(length);
test('length accepted', ()=>{
    expect(ship.length).toBe(length);
})

// conform the hit and sunk functionality
test("Ship hit",()=>{
    ship.hitShip();
    ship.hitShip();
    ship.hitShip();

    expect(ship.isSunk()).toBeTruthy;
})
