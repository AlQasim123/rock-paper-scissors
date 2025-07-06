// get random choise for computer
function getComputerChoice(choises) {
    let num = Math.floor(Math.random() * 3);
    return choises[num]
}

function playRound(userChoice) {

    const choises = ["Rock", "Paper", "Scissors"]
    const computerChoice = getComputerChoice(choises);
    
    // a var to hold the winner
    let winner, msg;
    
    // game logic tie or computer win else user win
    if (userChoice === computerChoice) {
        msg = "It's a Tie"
    } 
    else if ((userChoice === "Rock" && computerChoice == "Paper") ||
       (userChoice === "Paper" && computerChoice == "Scissors") ||
       (userChoice === "Scissors" && computerChoice == "Rock")) {
        msg = `You Lose!, ${computerChoice} beats ${userChoice}`;
        winner = "computer";
    } 
    else {
        msg = `You Win!, ${userChoice} beats ${computerChoice}`;
        winner = "user";
    }

    return [winner, msg]
}

function playGame() {
    let userScore = computerScore = 0;

    // create the choises for the user and the container
    const rock = document.createElement("button");
    const paper = document.createElement("button");
    const scissors = document.createElement("button");
    const btns = document.createElement("div");
    const container = document.createElement("div")
    
    rock.textContent = "Rock";
    paper.textContent = "Paper";
    scissors.textContent = "Scissors";
    
    // apppend the buttons in the container and append the container in the body element
    btns.appendChild(rock);
    btns.appendChild(paper);
    btns.appendChild(scissors);

    container.appendChild(btns);
    document.body.appendChild(container)
    
    // hold the scores & result of the round
    const scores = document.createElement("div");
    scores.textContent = "Your Score: N/A Computer Score: N/A"
    
    const result = document.createElement("p");
    result.textContent = "Start The Game!"
    
    container.appendChild(result);
    container.appendChild(scores);

    // add the game trigger
    const buttons = document.querySelectorAll("button");
    buttons.forEach((btn) => {
        btn.addEventListener("click", function() {

            const userSelection = btn.textContent;
            const [winner, msg] = playRound(userSelection);
            result.textContent = msg;
            if (winner === "user") userScore++;
            else if (winner === "computer") computerScore++;
            scores.textContent = `Your Score: ${userScore} Computer Score: ${computerScore}`
            if (userScore >= 5) {
                scores.textContent = "You Win!"
                result.textContent = "play again?";
                alert("You Win!")
                userScore = computerScore = 0;
            } else if (computerScore >= 5) {
                scores.textContent = "You Lose!"
                result.textContent = "play again?";
                alert("You Lose!")
                userScore = computerScore = 0;
            }
        });
    });    
}

playGame()