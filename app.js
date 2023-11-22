function game() {
    let playerScore = 0;
    let computerScore = 0;
    let gameWinner = '';

    function computerPlay() {
        let rock = 'Rock';
        let paper = 'Paper';
        let scissors = 'Scissors';
        let getRandomNumber = Math.floor(Math.random() * 3) + 1;
        if (getRandomNumber === 1) {
            return rock;
        } else if (getRandomNumber === 2) {
            return paper;
        } else {
            return scissors;
        }
    }

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerSelection = button.className;
            computerSelection = computerPlay();
            battleWinText.textContent = playRound(playerSelection, computerSelection);
            playerScoreText.textContent = `Player score: ${playerScore}`;
            computerScoreText.textContent = `Computer score: ${computerScore}`;
            endGame();
        })
    })


    function playRound(playerSelection, computerSelection) {
        if ((playerSelection === 'Rock') && (computerSelection === 'Scissors') || (playerSelection === 'Paper') && (computerSelection === 'Rock') || (playerSelection === 'Scissors') && (computerSelection === 'Paper')) {
            playerScore++;
            return `You win! You selected ${playerSelection} and the computer selected ${computerSelection}`;
        } else if (playerSelection === computerSelection) {
            return `It's a tie! You selected ${playerSelection} and the computer selected ${computerSelection}`;
        } else {
            computerScore++;
            return `You lose! You selected ${playerSelection} and the computer selected ${computerSelection}`;
        }
    }

    const container = document.querySelector('.container')
    const resultsDiv = document.createElement('div');
    resultsDiv.style.marginTop = '20px';
    container.appendChild(resultsDiv);

    const playerScoreText = document.createElement('p');
    playerScoreText.style.color = '#4682A9';
    playerScoreText.textContent = `Player score: ${playerScore}`;
    resultsDiv.appendChild(playerScoreText);

    const computerScoreText = document.createElement('p');
    computerScoreText.style.color = '#4682A9';
    computerScoreText.textContent = `Computer score: ${computerScore}`;
    resultsDiv.appendChild(computerScoreText);

    const battleWinText = document.createElement('p');
    battleWinText.style.color = '#363062';
    resultsDiv.appendChild(battleWinText);

    const gameWinnerText = document.createElement('p');
    gameWinnerText.style.color = '#ED7D31';
    resultsDiv.appendChild(gameWinnerText);


    function disableButtons() {
        document.getElementById('1').disabled = true;
        document.getElementById('2').disabled = true;
        document.getElementById('3').disabled = true;
    }

    function createPlayAgainButton() {
        const playAgainButton = document.createElement('button');
        resultsDiv.appendChild(playAgainButton);
        playAgainButton.textContent = 'Play Again';
        playAgainButton.addEventListener('click', () => {
            location.reload();
        })

    }

    function endGame() {
        if (playerScore === 5) {
            gameWinner = 'YOU WIN!';
            gameWinnerText.textContent = gameWinner;
            disableButtons();
            createPlayAgainButton();
        } else if (computerScore === 5) {
            gameWinner = 'COMPUTER WINS!';
            gameWinnerText.textContent = gameWinner;
            disableButtons();
            createPlayAgainButton();
        }
    }
}

game();