function computerPlay() {
    let result = Math.floor(Math.random()*3)+1;
    switch (result) {
        case 1:
            result = "Rock";
            break;
        case 2:
            result = "Paper";
            break;
        case 3:
            result = "Scissors";
            break;
        default:
            result = "Rock";
            break;
    }
    return result;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let message;

    if (playerSelection === computerSelection) {
        message = "Tie Game! You both picked "+computerSelection;
    } else if (((playerSelection=="Rock")&&(computerSelection=="Scissors")) || ((playerSelection=="Paper")&&(computerSelection=="Rock")) || ((playerSelection=="Scissors")&&(computerSelection=="Paper"))) {
        message = "You Win! "+playerSelection+" beats "+computerSelection;
    } else {
        message ="You Lose! "+computerSelection+" beats "+playerSelection;
    }

    return message;
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = window.prompt("Rock, Paper, Scissors!");
        const computerSelection = computerPlay();

        if ((playerSelection.toLowerCase()=="rock") || (playerSelection.toLowerCase()=="paper") || (playerSelection.toLowerCase()=="scissors")) {
            console.log(playRound(playerSelection, computerSelection));
        } else {
            console.log("Invalid input, Rocks, Papers and Scissors only!!!");
        }
    }
}

game()