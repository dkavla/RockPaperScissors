let playerScore = 0;
let computerScore = 0;
let round = 0;

/* Add events to the three buttons in the contianer */
const btnRock = document.querySelector('.rock');
btnRock.addEventListener('click', () => {
    playRound('rock', computerPlay());
});

const btnPaper = document.querySelector('.paper');
btnPaper.addEventListener('click', () => {
    playRound('paper', computerPlay())
});

const btnScissors = document.querySelector('.scissors');
btnScissors.addEventListener('click', () => {
    playRound('scissors', computerPlay())
});

const roundResult = document.querySelector(".round-result");
const player = document.querySelector(".player-score");
const computer = document.querySelector(".computer-score");
const roundNum = document.querySelector(".rounds");
const winner = document.querySelector(".winner");

// A function that returns the computers choice
let computerPlay = () => {
    let choices = ['rock', 'paper', 'scissors'];

    let pick = Math.floor(Math.random() * choices.length);
    return choices[pick];
};


let playRound = (playerSelection, computerSelection) => {
    
    // First cases invovle player losing 
    if( (playerSelection === 'rock' && computerSelection === 'paper') 
        || (playerSelection === 'paper' && computerSelection === 'scissors') 
        || (playerSelection === 'scissors' && computerSelection === 'rock') ){
            roundResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
            computerScore++;
            computer.textContent = `Computer: ${computerScore}`;
            round++;
            roundNum.textContent = `Round: ${round}`;
            if(round == 5){
                printWinner();
            }
        }
    // Second case involves player winning
    else if( (playerSelection === 'rock' && computerSelection === 'scissors') 
            || (playerSelection === 'paper' && computerSelection === 'rock') 
            || (playerSelection === 'scissors' && computerSelection === 'paper') ) {
                roundResult.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
                playerScore++;
                player.textContent = `Player: ${playerScore}`;
                round++;
                roundNum.textContent = `Round: ${round}`;
                if(round == 5){
                    printWinner();
                }
            }
    else if( playerSelection === computerSelection) {
        roundResult.textContent = `It's a Tie! No Points for Anyone in Round ${round}`;
        round++;
        roundNum.textContent = `Round: ${round}`;
        if(round == 5){
            printWinner();
        }
    }
};


let printWinner = () => {
    if(playerScore > computerScore) {
        winner.textContent = "Player Wins!"
        disableBtns();
    }else if(playerScore < computerScore) {
        winner.textContent = "Computer Wins!"
        disableBtns();
    }else{
        winner.textContent = "It's a Tie!"
        disableBtns();
    }
}

let disableBtns = () => {
    document.querySelector('.rock').disabled = true;
    document.querySelector('.paper').disabled = true;
    document.querySelector('.scissors').disabled = true;
}

