
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
            return (`You Lose! ${computerSelection} beats ${playerSelection}`);
        }
    // Second case involves player winning
    else if( (playerSelection === 'rock' && computerSelection === 'scissors') 
            || (playerSelection === 'paper' && computerSelection === 'rock') 
            || (playerSelection === 'scissors' && computerSelection === 'paper') ) {
                return (`You Win! ${playerSelection} beats ${computerSelection}`);
            }
    else if( playerSelection === computerSelection) {
        return (`It's a Tie! No Points for Anyone`);
    }
};


let game = () => {
    let playerScore = 0;
    let computerScore = 0;

    for(let round = 0; round < 5; round++){
        let user = prompt("Enter a valid choice (rock, paper, scissors): ");
        let validChoice = validatePlayerChoice(user);

        while(!validChoice){
            console.log("Invalid Choice.");
            user = prompt("Enter a valid choice (rock, paper, scissors): ");
            validChoice = validatePlayerChoice(user)
        }

        user = user.toLowerCase();

        result = playRound(user, computerPlay());

        if( (result === "You Lose! paper beats rock") 
            || (result === "You Lose! scissors beats paper") 
            || (result === "You Lose! rock beats scissors") ){
            console.log(result);
            computerScore++;
        }else if( (result === "You Win! rock beats scissors") 
            || (result === "You Win! paper beats rock") 
            || (result === "You Win! scissors beats paper") ){
            console.log(result);
            playerScore++;
        }else if(result === "It's a Tie! No Points for Anyone"){
            console.log(result);
            continue;
        }
    }

    if(playerScore > computerScore) {
        console.log(`Player Wins! Player Score: ${playerScore}  Computer Score: ${computerScore}`);
    }else if(playerScore < computerScore) {
        console.log(`Computer Wins! Player Score: ${playerScore}  Computer Score: ${computerScore}.`);
    }else if(playerScore === computerScore) {
        console.log(`It's a Tie! No Winner. Player Score: ${playerScore}  Computer Score: ${computerScore}.`);
    }
}

let validatePlayerChoice = (playerSelection) => {
    if(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        return true;
    }
    return false;
}

while(true) {
    game();
    break;
}

