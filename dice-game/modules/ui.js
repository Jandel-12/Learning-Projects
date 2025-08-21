import  Game  from "./game.js"





 export const display = () =>{

    const diceFaces = ["⚀","⚁","⚂","⚃","⚄","⚅"];

    function renderDice(playerdice) {
        return diceFaces[playerdice - 1];
    }

    function result(winner){
        return `The result is ${winner}.`;
    }



    return{
        renderDice,result
    }
}



    
