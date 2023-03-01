console.log("Let's play a game of Rock, Paper, Scissors!");

const choices = ['rock', 'paper', 'scissors'];

let computerSelection;

function getComputerChoice() {
    computerSelection = choices[Math.floor(Math.random()*choices.length)];
    return computerSelection;
};

let playerSelection;
let playerScore = 0;
let computerScore = 0;
let rounds = 0;

document.getElementById('refreshBtn').style.display = "none";

const update = document.querySelector('.update');
const pScore = document.querySelector('#pscore');
const cScore = document.querySelector('#cscore');
const fResult = document.querySelector('.finalResult');

function finalResult() {
    if (playerScore > 4) {
        fResult.textContent = `After ${rounds} rounds of play, the final score is Player - ${playerScore} Computer - ${computerScore}. Congratulations, you beat a stupid computer!`;
        document.getElementById('refreshBtn').style.display = "initial";
        document.querySelector('.weapons').style.display = "none";
        document.querySelector('.title').style.display = "none";
        document.querySelector('.update').style.display = "none";
    } else if (computerScore > 4) {
        fResult.textContent = `After ${rounds} rounds of play, the final score is Player - ${playerScore} Computer - ${computerScore}. Sorry, but you lost to a stupid computer!`;
        document.getElementById('refreshBtn').style.display = "initial";
        document.querySelector('.weapons').style.display = "none";
        document.querySelector('.title').style.display = "none";
        document.querySelector('.update').style.display = "none";
    } else {
        fResult.textContent = `The first player to win 5 rounds will win the game - I hope you don't lose to a stupid computer!`;
    };
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        update.textContent = `You chose ${playerSelection} and the computer chose ${computerSelection} - You Lose this round! Paper beats Rock!`;
        computerScore++;
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        update.textContent = `You chose ${playerSelection} and the computer chose ${computerSelection} - You Lose this round! Scissors beats Paper!`;
        computerScore++;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        update.textContent = `You chose ${playerSelection} and the computer chose ${computerSelection} - You Lose this round! Rock beats Scissors!`;
        computerScore++;
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        update.textContent = `You chose ${playerSelection} and the computer chose ${computerSelection} - You Win this round! Rock beats Scissors!`
        playerScore++;
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        update.textContent = `You chose ${playerSelection} and the computer chose ${computerSelection} - You Win this round! Paper beats Rock!`;
        playerScore++;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        update.textContent = `You chose ${playerSelection} and the computer chose ${computerSelection} - You Win this round! Scissors beats Paper!`;
        playerScore++;
    }
    else if (playerSelection === computerSelection) {
        update.textContent = `You chose ${playerSelection} and the computer chose ${computerSelection} - this round is a Tie!`
    }
    else {
        update.textContent = `Uh-oh, it looks like something went wrong here...`;
    };

    pScore.textContent = `${playerScore}`;
    cScore.textContent = `${computerScore}`;
    rounds++;
    finalResult();
};

function selectRock() {
    playerSelection = 'rock';
    getComputerChoice();
    playRound(playerSelection, computerSelection);
};

function selectPaper() {
    playerSelection = 'paper';
    getComputerChoice();
    playRound(playerSelection, computerSelection);
};

function selectScissors() {
    playerSelection = 'scissors';
    getComputerChoice();
    playRound(playerSelection, computerSelection);
};

function refresh() {
    location.reload();
};

const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', selectRock);

const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', selectScissors);

const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', selectPaper);

const refreshBtn = document.querySelector('#refreshBtn');
refreshBtn.addEventListener('click', refresh);
