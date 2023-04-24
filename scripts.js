
//Function to randomly select computer choice based on a random number between 0-99

function getComputerChoice(){
    let num1 = Math.random();
    console.log(num1);
    if (num1 <= 0.33){
        return ("rock");
    } else if (num1 > 0.33 && num1 <= 0.66) {
        return ("paper");
    } else if (num1 > 0.66 && num1 <= 0.99) {
        return ("scissors");
    }

//Get selections for a playRound and return a result based on the result. (Might be a good idea to rewrite this as a switch)

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