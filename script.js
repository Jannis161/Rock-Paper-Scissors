
// ==========================================
// HILFSFUNKTIONEN (Unabhängig vom Spielablauf)
// ==========================================

function getComputerChoice() { // Generiert die zufällige Wahl des Computers
    let a = Math.random() // Math.random() gibt eine Zahl zwischen 0 und 1 zurück

    if (a < 0.333) {
     return "rock"
    } else if (a < 0.666) {
    return "paper"
    } else {
    return "scissors"
    }

}

function getHumanChoice() { // Fragt die Wahl des menschlichen Spielers ab
    let person = prompt("Please choose rock, paper or scissors", "rock");
    return person.toLowerCase(); // .toLowerCase() stellt sicher, dass "ROCK", "Rock" und "rock" alle gleich behandelt werden
}

// ==========================================
// HAUPTSPIEL-LOGIK
// ==========================================

function playGame() {
    // Punktestände für das aktuelle Spiel initialisieren
    let humanScore = 0;
    let computerScore = 0;

    // Diese Funktion wertet EINE einzelne Runde aus
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "Tie!";
        }

        if ( // Alle Szenarien prüfen, in denen der Mensch gewinnt
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore += 1; // Punkt für den Menschen hochzählen
            return "Win for the Human!";
        } else {
            // Wenn es kein Unentschieden ist und der Mensch nicht gewinnt, 
            // muss der Computer gewonnen haben
            computerScore += 1; // Punkt für den Computer hochzählen
            return "Win for the machine!";
        }
    }

    // 5 Runden hintereinander abfeuern.
    // In jeder Zeile werden die Helfer-Funktionen direkt frisch aufgerufen.
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));

    // Gesamtauswertung nach den 5 Runden
    // Das Ergebnis wird mit "return" als Zettel an den Aufrufer zurückgegeben
    if (humanScore > computerScore) {
        return "Human won the game!"
    } else if (humanScore < computerScore) {
        return "Machine won the game!"
    } else {
        return "The game is a tie!"
    }
    
}

// ==========================================
// SPIELSTART
// ==========================================

// Hier wird das Spiel gestartet (der Bote wird losgeschickt).
// Da playGame() am Ende ein "return" liefert, nutzen wir console.log() als Megafon,
// um den finalen Gewinner-Text in die Konsole zu drucken.

console.log(playGame());