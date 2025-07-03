// get random choise for computer
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return "rock";
    } else if (num === 1) {
        return "paper";
    }
    return "scissors";
}

// get input from user and lower the case
function getHumanChoice() {
    return prompt("Rock, Paper, Scissors?").toLowerCase();
}

// cap the first letter for printing 
function capFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1); 
}

function playRound(humanChoice, computerChoice) {
    // convert human an computer choices to a title (start wit a cap letter)
    let humanWord = capFirstLetter(humanChoice)
    let computerWord = capFirstLetter(computerChoice)
    
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

    // print the result and return the winner of the round
    console.log(msg);
    return winner
}

function playGame() {
    // scores
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

    // print the scores for user, computer and the result of the five rounds
    let resut = (humanScore > computerScore) ? "You Win": (humanScore === computerScore) ? "Draw": "You Lose";
    console.log(`Your Score = ${humanScore}\nComputer Score = ${computerScore}\n${resut}`);
}

playGame()