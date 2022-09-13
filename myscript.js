const MOVES  = ["Rock", "Paper", "Scissor"];

function getComputerChoice(){
    let random = Math.floor(Math.random() * MOVES.length);
    return MOVES[random];
}
console.log(getComputerChoice());