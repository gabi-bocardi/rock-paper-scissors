const MOVES  = ["ROCK", "PAPER", "SCISSOR"];

function getComputerChoice(){
    let random = Math.floor(Math.random() * MOVES.length);
    return MOVES[random];
}

const computerSelection = getComputerChoice();
const playerSelection = prompt("What's your move? Choose Rock, Paper or Scissor.").toUpperCase();

function getWinner(playerSelection,computerSelection){
   let winMessage = `You win! ${playerSelection} beats ${computerSelection}`;
   let loseMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
   let tieMessage = 'It\'s a tie!';
   
    if ((playerSelection == MOVES[0] && computerSelection == MOVES[1]) || (playerSelection == MOVES[1] && computerSelection == MOVES[0]))
        return playerSelection == MOVES[0]? loseMessage : winMessage;
    if ((playerSelection == MOVES[0] && computerSelection == MOVES[2]) || (playerSelection == MOVES[2] && computerSelection == MOVES[0]))
        return playerSelection == MOVES[2]? loseMessage : winMessage;
    if ((playerSelection == MOVES[1] && computerSelection == MOVES[2]) || (playerSelection == MOVES[2] && computerSelection == MOVES[1]))
        return playerSelection == MOVES[1]? loseMessage : winMessage;
    if (playerSelection == computerSelection)
        return tieMessage;

    }

    

