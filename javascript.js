console.log("Let's play a game of Rock, Paper, Scissors!");

// Will do my best to use comments to scope out and plan my code before just jumping into things too quickly


// To start, I'll create a constant called 'choices' which will be an array of the 3 choices that the computer / player can select from (Rock, Paper, or Scissors)

const choices = ['Rock', 'Paper', 'Scissors']

// now I'll create the variable computerSelection, but won't assign it a value just yet (note that we need to create this variable outside of the getComputerSelection function below so that it is a globally-scoped variable; I made a mistake initially and tried to create + assign the computerSelection variable inside the getComputerChoice function, which caused my console.log(computerSelection) check below to throw an error, since the variables scope was not global, only local inside the function)

let computerSelection;

// Now, we'll need to get the computer's choice of either rock, paper, or scissors; here is the place where I'll write a function called getComputerChoice and assign the result to our previously-created computerSelection global variable ()

function getComputerChoice() {
    computerSelection = choices[Math.floor(Math.random()*choices.length)];
    return computerSelection;
}

getComputerChoice();

// We called the function getComputerChoice just above here, which should randomly choose one of the 3 options and return that value as the variable choice; to test that this is working correctly, I want to use console.log() to verify

// console.log("The computer's selection is " + computerSelection);

// this seems to be working correctly - once we have the other kinks worked out below we can remove this console.log() check so that we don't give away the computer's choice to the player

// Now we need to prompt the player for their choice of rock, paper, or scissors (case INSENSITIVE) and record that as a variable called playerSelection:

let playerSelection = prompt('Choose your weapon', 'Type your choice here');

// let's see if we can use console.log() to test if playerSelection variable was assigned correctly

// console.log("The player's selection is " + playerSelection);

// looks good! I commented out the console.log() check above, but we can revert to it if needed in the future

// now we're going to create a function simulating one (1) round of play, using the playerSelection and computerSelection variables that should now be defined; I used the .toLowerCase modifier on both playerSelection and computerSelection variables so that we can take care of any cApS issues with the player input and compare the variables properly

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') {
        return `You chose ${playerSelection} and the computer chose ${computerSelection} - You Lose this round! Paper beats Rock!`
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors') {
        return `You chose ${playerSelection} and the computer chose ${computerSelection} - You Lose this round! Scissors beats Paper!`
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock'){
        return `You chose ${playerSelection} and the computer chose ${computerSelection} - You Lose this round! Rock beats Scissors!`
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
        return `You chose ${playerSelection} and the computer chose ${computerSelection} - You Win this round! Rock beats Scissors!`
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
        return `You chose ${playerSelection} and the computer chose ${computerSelection} - You Win this round! Paper beats Rock!`
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') {
        return `You chose ${playerSelection} and the computer chose ${computerSelection} - You Win this round! Scissors beats Paper!`
    }
    else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return `You chose ${playerSelection} and the computer chose ${computerSelection} - this round is a Tie!`
    }
    else {
        return `You entered ${playerSelection}, which is not an option for this game. Please check your spelling (and any extra spaces before or after your choice) and try again.`;
    }
}

// lets do another console.log() check to see if this function is returning the desired string output

// console.log(playRound(playerSelection,computerSelection));

// That worked fine, so I commented it out for now; Next I'll try to create a game function that includes X rounds of playRound function (adjustable to any desired number of rounds) and keeps score between the player and the computer

function game(rounds) {
    let playerScore = 0;
    let computerScore = 0; 
    for (let i = 0; i < rounds; i++) {
        console.log(playRound(playerSelection, computerSelection));
        if (playRound(playerSelection, computerSelection).includes('Win')) {
            ++playerScore;
        } else if (playRound(playerSelection,computerSelection).includes('Lose')) {
            ++computerScore;
        };
        console.log(`Round #${(i + 1)} of ${rounds} is complete. The current score is: Player - ${playerScore} Computer - ${computerScore}.`);
        // I added the code below to generate new values for computerSelection and playerSelection after each round ws played. However, I had to add the if (i < rounds - 1) qualifier because the for loop was causing an extra prompt for user input after the last round had already been played. Not sure if there is a cleaner way to exclude the playerSelection prompt from the for loop...but this worked fine for now!
        if (i < rounds - 1) {
            getComputerChoice();
            playerSelection = prompt('Choose your weapon', 'Type your choice here');
        };
    };

    if (playerScore > computerScore) {
        return `After ${rounds} rounds of play, the final score is Player - ${playerScore} Computer - ${computerScore}. Congratulations, you beat a stupid computer!`;
    } else if (computerScore > playerScore) {
        return `After ${rounds} rounds of play, the final score is Player - ${playerScore} Computer - ${computerScore}. Sorry, but you lost to a stupid computer!`;
    } else {
        return `After ${rounds} rounds of play, the final score is Player - ${playerScore} Computer - ${computerScore}. You tied with a stupid computer.`;
    };
};

console.log(game(5));

