import Game from "./modules/game.js";
import { display } from "./modules/ui.js";

const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const result = document.getElementById("result-text");
const rollBtn = document.getElementById("roll-btn");


const game = new Game();
const displayDice = display();

rollBtn.addEventListener("click", ()=>{

    const newGame = game.playRound();

    dice1.textContent = displayDice.renderDice(newGame.player1);
    dice2.textContent = displayDice.renderDice(newGame.player2);
    result.textContent = displayDice.result(newGame.result);

})