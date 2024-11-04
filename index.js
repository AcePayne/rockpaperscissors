function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    const choice = prompt("Enter your choice, either rock, paper, or scissors");

    if(choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        const computerChoice = getComputerChoice();
        if(choice === 'rock') {
            if(computerChoice === 'rock') {
                return "It's a tie";
            } else if(computerChoice === 'paper') {
                return "Paper covers rock. You lose.";
            } else {
                return "Scissors crushed by rock. You win.";
            }
        } else if(choice === 'paper') {
            if(computerChoice === 'rock') {
                return "Paper covers rock. You win.";
            } else if(computerChoice === 'paper') {
                return "It's a tie.";
            } else {
                return "Scissors cuts paper. You lose.";
            }
        } else if(choice === 'scissors') {
            if(computerChoice === 'rock') {
                return "Rock crushes scissors. You lose.";
            } else if(computerChoice === 'paper') {
                return "Scissors cuts paper. You win.";
            } else {
                return "It is a tie. Lesbians scissoring lesbians.";
            }
        }
    } else {
        return "Invalid input";
    }
}

console.log(getHumanChoice());