function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return "rock";
    } else if (num === 1) {
        return "paper";
    }
    return "scissors";
}

function getHumanChoice() {
    return prompt("Rock, Paper, Scissors?");
}

let humanScore = computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // convert the humanChoice to lower case
    humanChoice = humanChoice.toLowerCase();
    // convert human an computer choices to a title (start wit a cap letter)
    let humanWord = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1); 
    let computerWord = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1); 
    // a var to hold the result of the round
    let msg;
    // game logic draw or computer win else human win
    if (humanChoice === computerChoice) {
        msg = `Draw`;

    } else if (humanChoice === "rock" && computerChoice == "paper" ||
        humanChoice === "paper" && computerChoice == "scissors" ||
        humanChoice === "scissors" && computerChoice == "rock"
    ) {
        msg = `You lose! ${computerWord} beats ${humanWord}`;
        computerScore++;
   
    } else {
        msg = `You Win! ${humanWord} beats ${computerWord}`;
        humanScore++;
    }
    console.log(msg);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);