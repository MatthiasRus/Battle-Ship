import {GameBoard} from "./gameBoard.js"

export class Player{
  constructor(){
     this.playerBoard = new GameBoard();
  }

  makeMove(coordinate){
    this.playerBoard.receiveAttack(coordinate)
  }
}

class Computer extends Player{
    constructor(){
      super();
    }

    makeRandomMove(){
      // generating random movement
      let randomCoordinate = []
      for (let i=0;i<2;i++){
         let randomNumber = Math.floor(Math.random()*10);
          randomCoordinate.push(randomNumber);
      }

      makeMove(randomCoordinate);
    }


}
