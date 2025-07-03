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

function playRound(humanChoice, computerChoice) {
    // convert the humanChoice to lower case
    humanChoice = humanChoice.toLowerCase();
    // convert human an computer choices to a title (start wit a cap letter)
    let humanWord = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1); 
    let computerWord = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1); 
    // a var to hold the result of the round and the winner
    let msg, winner;
    // game logic draw or computer win else human win
    if (humanChoice === computerChoice) {
        msg = `Draw`;
    } 
    else if ((humanChoice === "rock" && computerChoice == "paper") ||
       (humanChoice === "paper" && computerChoice == "scissors") ||
       (humanChoice === "scissors" && computerChoice == "rock")) {
        msg = `You lose! ${computerWord} beats ${humanWord}`;
        winner = "computer"
    } 
    else {
        msg = `You Win! ${humanWord} beats ${computerWord}`;
        winner = "human"
    }
    console.log(msg);
    return winner
}

function playGame() {
    let humanScore = computerScore = 0;

    // first round
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    let winner = playRound(humanSelection, computerSelection);
    if (winner) {
        winner === "human" ? humanScore++: computerScore++;
    }
    
    // second round
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    winner = playRound(humanSelection, computerSelection);
    if (winner) {
        winner === "human" ? humanScore++: computerScore++;
    }
    
    // third round
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    winner = playRound(humanSelection, computerSelection);
    if (winner) {
        winner === "human" ? humanScore++: computerScore++;
    }
    
    // fourth round
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    winner = playRound(humanSelection, computerSelection);
    if (winner) {
        winner === "human" ? humanScore++: computerScore++;
    }
    
    // fifth round
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    winner = playRound(humanSelection, computerSelection);
    if (winner) {
        winner === "human" ? humanScore++: computerScore++;
    }
    
    let resut = (humanScore > computerScore) ? "Win": (humanScore === computerScore) ? "Draw": "Lose";
    console.log(`Your Score = ${humanScore}
Computer Score = ${computerScore}
You ${resut}`);
}

playGame()