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

// let humanScore = 0;
// let computerScore = 0;

function playRound (humanChoice, computerChoice) {

    //human win scenerios
    if (humanChoice == "Rock" && computerChoice == "Scissors") {
        console.log("You won!! Rock beats Scissors!");
        humanScore++;
    }
    if (humanChoice == "Scissors" && computerChoice == "Paper") {
        console.log("You won!! Scissors beats paper!");
        humanScore++;
    }
    if (humanChoice == "Paper" && computerChoice == "Rock") {
        console.log("You won!! Paper beats rock!");
        humanScore++;
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
        console.log("Computer Won!! Scissors beats rock!");
        computerScore++;
    }
    if (humanChoice == "Paper" && computerChoice == "Scissors") {
        console.log("Computer Won!! Paper beats Scissors!");
        computerScore++;
    }
    if (humanChoice == "Rock" && computerChoice == "Paper") {
        console.log("Computer Won!! Paper beats rock!");
        computerScore++;
    }

}

function playGame() {


    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

    }

    console.log("Your Score was " + humanScore);
    console.log("the computers score was " + computerScore);

    if (humanScore > computerScore) {
        console.log("You won Rock paper Scissors against the computer!");
    }
    else if (humanScore === computerScore) {
        console.log("This game of Rock paper scissors ended in a tie!");
    }
    else {
        console.log("You lost the game of Rock paper scissors against the computer!");
    }


}

playGame();
