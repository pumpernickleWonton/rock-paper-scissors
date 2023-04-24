
//Function to randomly select computer choice based on a random number between 0-99

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

//get player move
function getPlayerMove() {
    let ask = prompt("Rock, Paper, Scissors, SHOOT!");
    return ask.toLowerCase();
}

//compare scores and decide a victor
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
//KNOWN ISSUE loop iterates until BOTH scores are 5
//not enough loop knowledge yet to fix, will move forward with lessons
function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 5 || computerScore < 5) {
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