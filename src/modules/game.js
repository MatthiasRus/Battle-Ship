import { Player } from "./player.js";
import { GameBoard } from "./gameBoard.js";

function startGame(){
    const playerOne = new Player();
    const playerTwo = new Player();
    playerOne.playerBoard.placeShip([0,0],'Horizontal',{length : 4});
    playerOne.makeMove([0,0]);
    playerOne.playerBoard.placeShip([0,0],'vertical',{length : 4});
    playerOne.makeMove([1,0]);
    playerOne.makeMove([2,0]);
    playerOne.makeMove([0,8]);
    playerOne.playerBoard.placeShip([1,0],'vertical',{length : 4});

    console.table(playerOne.playerBoard.grid)
}

startGame();