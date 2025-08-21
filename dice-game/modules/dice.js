//Dice logic

export default class Dice{
    roll() {
        return Math.floor(Math.random() * 6) + 1;
    }
}
