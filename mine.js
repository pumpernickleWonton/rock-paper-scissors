const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const resultText = document.querySelector('#resultText');
const choiceBtns = document.querySelectorAll('.choiceBtn');
const pScore = document.querySelector('#player-score');
const cScore = document.querySelector('#computer-score'); 
let player;
let computer;
let result;

let playerScore = 0;
let computerScore = 0;



function playGame() {
    choiceBtns.forEach(button => button.addEventListener('click', () => {
        player = button.textContent;
        getComputerChoice();
        playerText.textContent = `Player: ${player}`;
        computerText.textContent  = `Computer: ${computer}`;
        resultText.textContent = `Result: ${checkWinner()}`;
        
        function checkWinner() {
            if (player == computer) {
                return "Draw!";
            }
            else if (player == "ROCK" && computer == "SCISSORS") {
                playerScore += 1;
                return "You Win!";
            }
            else if (player == "PAPER" && computer == "ROCK") {
                playerScore += 1;
                return "You Win!";
            }
            else if (player == "SCISSORS" && computer == "PAPER") {
                playerScore += 1;
                return "You Win!";
            }
            else {
                computerScore += 1;
                return "You Lose!";
            }
        }
        pScore.textContent = `Player Score: ${playerScore}`;
        cScore.textContent = `Computer Score: ${computerScore}`;

        if(playerScore == 5 ) {
            resultText.innerHTML = "YOU WIN THE GAME!"
        }
        else if (computerScore == 5) {
            resultText.innerHTML = "COMPUTER WINS THE GAME";
        }

    }));

}

function getComputerChoice() {
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum) {
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
    
}

playGame();
