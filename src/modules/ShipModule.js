export class Ship{
  constructor(length){
    this.length = length;
    this.hit = 0;
    this.sunk = false;
  }

  hit() {
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

