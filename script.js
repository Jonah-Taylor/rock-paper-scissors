

let humanScore = 0;
let computerScore = 0;

console.log("hello world");

function playRound(humanChoice, computerChoice) {
    
    wonGame = false;

    if (humanChoice === "rock" && computerChoice === "scissors") {
        wonGame = true;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        wonGame = true;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        wonGame = true;
    }

    if (humanChoice === computerChoice) {
        console.log(`Tie ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} ties with ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`);
    } else if (wonGame) {
        humanScore += 1;
        console.log(`You Won! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`);
    } else {
        computerScore += 1;
        console.log(`You Lost! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} loses to ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`);
    }
}


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
    return "error"
}

function getHumanChoice() {
    return prompt("Rock, paper, or scissors?").toLowerCase();
}

function playGame() {

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("The human wins!");
    } else if (humanScore < computerScore) {
        console.log("The computer wins!");
    } else {
        console.log("It's a tie!");
    }
}

playGame();


