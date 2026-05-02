function getComputerChoice() {
    let a = Math.random()

    if (a < 0.333) {
     return "rock"
    } else if (a < 0.666) {
    return "paper"
    } else {
    return "scissors"
    }

}

function getHumanChoice() {
    let person = prompt("Please choose rock, paper or scissors", "rock");
    return person.toLowerCase();
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "Tie!";
        }

        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore += 1;
            return "Win for the Human!";
        } else {
            computerScore += 1;
            return "Win for the machine!";
        }
    }

    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));

    if (humanScore > computerScore) {
        return "Human won the game!"
    } else if (humanScore < computerScore) {
        return "Machine won the game!"
    } else {
        return "The game is a tie!"
    }
    
}

console.log(playGame());