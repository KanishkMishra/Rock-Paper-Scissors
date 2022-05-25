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
        let playerSelection = window.prompt("Rock, Paper or Scissors?");
        let computerSelection = computerPlay();

        console.log(playerSelection, computerSelection);
    }
}