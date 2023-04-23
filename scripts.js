function getComputerChoice(){
    let computerSelection = Math.floor(Math.random() * 100);
    if (computerSelection <= 33){
        console.log("Rock");
    } else if (computerSelection > 33 && computerSelection <= 66) {
        console.log("Paper");
    } else if (computerSelection > 66 && computerSelection <= 99) {
        console.log("Scissors");
    }
}
console.log(getComputerChoice());

function playerSelection(str) {
    let playerChoice = prompt("Rock, Paper, Scissors, SHOOT!");
    playerChoice = playerChoice.toLowerCase;
}

// console.log(playerSelection());

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock") {
        console.log("It\'s a Tie!");
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You Lose!");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You Win!!");
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        console.log("It\'s a Tie!");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You Win!!");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You Lose!");
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        console.log("It\'s a Tie!");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You Win!");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You Lose!")
    }
}