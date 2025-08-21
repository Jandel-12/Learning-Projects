import  Dice  from "./dice.js";

//Structure two dices and compare them to decide the winner
export default class Game{
    constructor(){
        this.dice = new Dice();
    }


    playRound(){
        const player1 = this.dice.roll();
        const player2 = this.dice.roll();

        //compare two result
        let result = "tie";
        if(player1 > player2){
                result = "player 1";
            }

        if(player2 > player1){
            result = "player 2";
            }

            return{
                player1,player2,result
            }
    }
}


