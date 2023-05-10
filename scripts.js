
const container = document.querySelector('#container');

const player = document.createElement('h3');
player.innerHTML = "Player chose: ";

const computer = document.createElement('h3');
computer.innerHTML = "Computer chose: ";
container.appendChild(computer);


const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')


rock.addEventListener('click', () => alert("rock"));

//Function to randomly select computer choice based on a random number
//TODO condense it down a bit?
function getComputerChoice(){
    let num1 = Math.random();
    if (num1 <= 0.33){
        return ("rock");
    } else if (num1 > 0.33 && num1 <= 0.66) {
        return ("paper");
    } else if (num1 > 0.66 && num1 <= 1) {
        return ("scissors");
    }
}

//compare scores and decide a victor
//TODO condense the logic down. if((thisthat) || (thatthis))?
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It\'s a Tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        // computerScore += 1;
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        // playerScore += 1;
        return "You Win! Rock beats Scissors!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        // playerScore += 1;
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        // computerScore += 1;
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        // playerScore += 1;
        return "You Win! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        // computerScore += 1;
        return "You Lose! Rock beats Scissors"
    } else {
        return "Please enter a valid move."
    }
}


//Run full game 

function game() {
    let playerScore = 0;
    let computerScore = 0;

    while ((playerScore || computerScore) < 5) {
        const result = playRound(getPlayerMove(), getComputerChoice());
        console.log(result);
        if(result.includes("Win")) {
            playerScore++;
            console.log(`computer: ${computerScore} | player: ${playerScore}`);
        } else if (result.includes("Lose")) {
            computerScore++;
            console.log(`computer: ${computerScore} | player: ${playerScore}`);
        }
    }
    console.log(
        "Final Results: Player: " + playerScore + " Computer: " + computerScore
    );
    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else {
        console.log("You lose the game.");
    }
}

game();