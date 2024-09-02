export class Ship{
  constructor(length){
    this.length = length >= 2 && length <= 5 ? length : console.log("value has to be between 2 and 5");
    this.hit = 0;
    this.sunk = false;
  }

  hitShip() {
   this.hit++;
    if (this.hit == this.length){
      this.sunk = true;
      return;
    }
  }

  isSunk(){
    return this.sunk;
  }
}

