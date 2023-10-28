const options = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}. Score: ${playerScore} - ${computerScore}`;
    } else if (playerSelection == computerSelection) {
        return `Tie game! ${playerScore} - ${computerScore}`
    } else {
        computerScore++;
        return `You lost! ${computerSelection} beats ${playerSelection}. Score: ${playerScore} - ${computerScore}`
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Rock, Paper, or Scissors?')
        playerSelection = playerSelection.toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));

    } if (playerScore > computerScore) {
        console.log(`You win! Final score: ${playerScore} - ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You lost! Final score: ${playerScore} - ${computerScore}`);
    } else {
        console.log(`Tie game! Final score: ${playerScore} - ${computerScore}`);
    }
}

game();