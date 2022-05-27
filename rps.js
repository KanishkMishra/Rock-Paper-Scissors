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

function playRound(playerSelection, computerSelection=computerPlay()) {
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

/*function game() {
    // play 5 games using typed words
    for (let i = 0; i < 5; i++) {
        const playerSelection = window.prompt("Rock, Paper, Scissors!");
        const computerSelection = computerPlay();

        if ((playerSelection.toLowerCase()=="rock") || (playerSelection.toLowerCase()=="paper") || (playerSelection.toLowerCase()=="scissors")) {
            console.log(playRound(playerSelection, computerSelection));
        } else {
            console.log("Invalid input, Rocks, Papers and Scissors only!!!");
        }
    }
}*/

// player scores
let pScore = 0;
let cScore = 0;

function updateScore(result) {
    let array = result.split("!");
    if (array[0] === "You Win") {
        pScore++; 
    }
    else if (array[0] === "You Lose") {
       cScore++;
    }

    player.textContent = "Player: "+pScore;
    computer.textContent = "Computer: "+cScore;

    checkWinner(pScore, cScore);
}

function checkWinner(pScore, cScore) {
    if (pScore==5) {
        const end = document.querySelector('div');

        end.style.textAlign='center';
        end.style.justifySelf='center';
        end.style.fontSize="64px";

        end.textContent="You have won! Congratulations!";
    } else if (cScore==5) {
        const end = document.querySelector('div');

        end.style.textAlign='center';
        end.style.justifySelf='center';
        end.style.fontSize="64px";

        end.textContent="Computer has won! Try again!";
    }
}

// locate buttons
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

//click buttons
rock.addEventListener('click', () => {
    const board = document.querySelector("h2");

    // give point to winner
    let result = playRound("Rock");
    updateScore(result);

    board.textContent = result;
});
paper.addEventListener('click', () => {
    const board = document.querySelector("h2");

    // give point to winner
    let result = playRound("Paper");
    updateScore(result);

    board.textContent = playRound("Paper")
});
scissors.addEventListener('click', () => {
    const board = document.querySelector("h2");

    // give point to winner
    let result = playRound("Scissors");
    updateScore(result);

    board.textContent = playRound("Scissors")
});

// create display
const container = document.querySelector('body');

const display = document.createElement('div');

display.style.border = "thick solid black";
display.style.height = "400px";
display.style.margin = "40px";
display.style.backgroundColor = "blue";

// create score board
const player = document.createElement('h1');
const computer = document.createElement('h1');
const winner = document.createElement('h2');

winner.style.textAlign='center';

updateScore("");

display.appendChild(player);
display.appendChild(computer);
display.appendChild(winner);

container.appendChild(display);

//game()