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


let humanScore = 0;

let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // 1. Zuerst prüfen wir auf Unentschieden (spart viel Tipparbeit!)
    if (humanChoice === computerChoice) {
        return "Tie!";
    }

    // 2. Dann prüfen wir alle Gewinn-Szenarien für den Menschen
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return "Win for the Human!";
    } else {
        return "Win for the machine!";
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));