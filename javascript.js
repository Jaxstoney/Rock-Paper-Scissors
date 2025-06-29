let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {

    //num is initalialized with a random number between 1-3
    let num = (Math.ceil(Math.random() * 100) % 3) + 1;

    //depending on the number return rock, paper or scissors
    if (num === 1) {
        return "Rock";
    }
    else if (num === 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }

}

function getHumanChoice() {

    //prompt user for a number between 1-3 which will be their choice for the game
    let num = prompt("choose a number between 1-3, one is rock, two is paper, three is scissors:");

    //depending on the number return rock, paper or scissors
    if (num == 1) {
        return "Rock";
    }
    else if (num == 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }

}


function playRound (humanChoice, computerChoice) {

    //human win scenerios
    if (humanChoice == "Rock" && computerChoice == "Scissors") {
        // console.log("You won!! Rock beats Scissors!");
        gameResult.textContent = "You won!! Rock beats Scissors!";
        humanScore++;
    }
    if (humanChoice == "Scissors" && computerChoice == "Paper") {
        // console.log("You won!! Scissors beats paper!");
        gameResult.textContent = "You won!! Scissors beats paper!";
        humanScore++;
    }
    if (humanChoice == "Paper" && computerChoice == "Rock") {
        // console.log("You won!! Paper beats rock!");
        gameResult.textContent = "You won!! Paper beats rock!";
        humanScore++;
    }

    // tie scenerios

    if (humanChoice == "Rock" && computerChoice == "Rock") {
        // console.log("Tie!!");
        gameResult.textContent = "Tie!!";
    }
    if (humanChoice == "Scissors" && computerChoice == "Scissors") {
        // console.log("Tie!!");
        gameResult.textContent = "Tie!!";
    }
    if (humanChoice == "Paper" && computerChoice == "Paper") {
        // console.log("Tie!!");
        gameResult.textContent = "Tie!!";
    }

    // human lose scenerios
    if (humanChoice == "Scissors" && computerChoice == "Rock") {
        // console.log("Computer Won!! Rock beats Scissors!");
        gameResult.textContent = "Computer Won!! Rock beats Scissors!";
        computerScore++;
    }
    if (humanChoice == "Paper" && computerChoice == "Scissors") {
        // console.log("Computer Won!! Scissors beats Paper!");
        gameResult.textContent = "Computer Won!! Scissors beats Paper!";
        computerScore++;
    }
    if (humanChoice == "Rock" && computerChoice == "Paper") {
        // console.log("Computer Won!! Paper beats Rock!");
        gameResult.textContent = "Computer Won!! Paper beats Rock!";
        computerScore++;
    }

}



const rock = document.querySelector('.rock-btn');
const paper = document.querySelector('.paper-btn');
const scissors = document.querySelector('.scissors-btn');
const gameResult = document.querySelector('.heading');
const playerScore = document.querySelector('.player-score');
const botScore = document.querySelector('.bot-score')


rock.addEventListener("click", playRock);
paper.addEventListener("click", playPaper);
scissors.addEventListener("click", playScissors);

function playRock() {
    playRound("Rock", getComputerChoice());
    playerScore.textContent = "Your score: " + humanScore;
    botScore.textContent = "Computer Score: " + computerScore;

}

function playPaper() {
    playRound("Paper", getComputerChoice());
    playerScore.textContent = "Your score: " + humanScore;
    botScore.textContent = "Computer Score: " + computerScore;
}

function playScissors() {
    playRound("Scissors", getComputerChoice());
    playerScore.textContent = "Your score: " + humanScore;
    botScore.textContent = "Computer Score: " + computerScore;
}