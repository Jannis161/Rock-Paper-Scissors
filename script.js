console.log("Hello World")


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

console.log(getComputerChoice())
