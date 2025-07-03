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
    return prompt("Rock, Paper, scissors? ")
}
