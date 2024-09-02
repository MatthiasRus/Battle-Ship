import {Ship} from "../src/modules/ShipModule.js";

const ship = new Ship(3);
let ans = ship.length;
test('volla', ()=>{
    expect(ship.length).toBe(ans);
})
console.log(ship.length);
