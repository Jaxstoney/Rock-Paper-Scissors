


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

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {

    //human win scenerios
    if (humanChoice == "Rock" && computerChoice == "Scissors") {
        console.log("Human wins!!");
    }
    if (humanChoice == "Scissors" && computerChoice == "Paper") {
        console.log("Human wins!!");
    }
    if (humanChoice == "Paper" && computerChoice == "Rock") {
        console.log("Human wins!!");
    }

    // tie scenerios

    if (humanChoice == "Rock" && computerChoice == "Rock") {
        console.log("Tie!!");
    }
    if (humanChoice == "Scissors" && computerChoice == "Scissors") {
        console.log("Tie!!");
    }
    if (humanChoice == "Paper" && computerChoice == "Paper") {
        console.log("Tie!!");
    }

    // human lose scenerios
    if (humanChoice == "Scissors" && computerChoice == "Rock") {
        console.log("Computer Wins!!");
    }
    if (humanChoice == "Paper" && computerChoice == "Scissors") {
        console.log("Computer Wins!!");
    }
    if (humanChoice == "Rock" && computerChoice == "Paper") {
        console.log("Computer Wins!!");
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
