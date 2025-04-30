
let humanScore = 0;
let computerScore = 0;

let humanScoreText = document.querySelector("#hs");
let computerScoreText = document.querySelector("#cs");

let result = document.querySelector(".result");


function playRound(humanChoice, computerChoice) {
    
    let wonGame = false;

    if (humanChoice === "rock" && computerChoice === "scissors") {
        wonGame = true;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        wonGame = true;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        wonGame = true;
    }
    
    if (humanChoice === computerChoice) {
        result.textContent = (`Tie! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} ties with ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`);
    } else if (wonGame) {
        humanScore += 1;
        humanScoreText.textContent = humanScore;
        result.textContent = (`Humans Point! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`);
    } else {
        computerScore += 1;
        computerScoreText.textContent = computerScore;
        result.textContent = (`Computer's Point! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} loses to ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`);
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


let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        let cc = getComputerChoice()
        playRound(event.target.textContent.toLowerCase(), cc);
        if (humanScore === 5 || computerScore === 5) {
            if (humanScore === 5) {
                result.textContent = (`The human wins with a score of ${humanScore} against ${computerScore}!`);
            } else {
                result.textContent = (`The computer wins with a score of ${computerScore} against ${humanScore}!`);
            }
            humanScore = 0;
            computerScore = 0;
        }
    });
});
