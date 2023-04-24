
//Function to randomly select computer choice based on a random number between 0-99

function getComputerChoice(){
    let num1 = Math.random();
    if (num1 <= 0.33){
        return ("rock");
    } else if (num1 > 0.33 && num1 <= 0.66) {
        return ("paper");
    } else if (num1 > 0.66 && num1 <= 0.99) {
        return ("scissors");
    }
}

function playerMove() {
    let ask = prompt("Rock, Paper, Scissors, SHOOT!");
    return ask.toLowerCase();
}

//Store functions for Player and Computer move choices to a const variable

const playerSelection = playerMove();
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It\'s a Tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors"
    }
}

console.log(playerSelection);
console.log(computerSelection);

console.log(playRound(playerSelection, computerSelection));