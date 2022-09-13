const MOVES  = ["ROCK", "PAPER", "SCISSOR"];

function getComputerChoice(){
    let random = Math.floor(Math.random() * MOVES.length);
    return MOVES[random];
}


function playRound(playerSelection,computerSelection){

    if ((playerSelection == MOVES[0] && computerSelection == MOVES[1]) || (playerSelection == MOVES[1] && computerSelection == MOVES[0]))
        return playerSelection == MOVES[0]? "Computer" : "User";
    else if ((playerSelection == MOVES[0] && computerSelection == MOVES[2]) || (playerSelection == MOVES[2] && computerSelection == MOVES[0]))
        return playerSelection == MOVES[2]? "Computer" : "User";
    else if ((playerSelection == MOVES[1] && computerSelection == MOVES[2]) || (playerSelection == MOVES[2] && computerSelection == MOVES[1]))
        return playerSelection == MOVES[1]? "Computer" : "User";
    else if (playerSelection == computerSelection)
        return "Tie";

    }

function Game(){
    let computerPoints = 0;
    let userPoints = 0;
    
    for(let i = 0; i < 5; i++){
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("What's your move? Choose Rock, Paper or Scissor.").toUpperCase();
        let winner = playRound(playerSelection,computerSelection);
        if (winner == "Computer"){
            computerPoints++;
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        }
        else if (winner == "User"){
            userPoints++;
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        }
        else
            console.log('It\'s a tie!');
        
        console.log(`Rounds left: ${5 - (i + 1)}`)
    }
    if(computerPoints > userPoints)
        console.log("Computer wins the game");
    else if (computerPoints < userPoints)
        console.log("You win the game");
    else
        console.log("It's a tie");

    

}

Game();

