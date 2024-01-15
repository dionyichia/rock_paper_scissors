function caps (string) {
    let firstLetter = string[0];
    let part = string.slice[1];
    if (part == null) {
        part = ''
    }
    string = firstLetter.toUpperCase() + part;
}

function getComputerChoice () {
    //gen a random output from the comp from 3 choices
    let int = Math.floor(Math.random() * 3);
    let choice = "Rock";
    if (int == 0) {
        return choice = "Paper";
    } 
    else if (int == 1) {
        return choice = "Scissors";
    }
    else {
        return choice;
    }
}


function playRound (playerSelection) {
    let outcome = 0;
    let playerScore = document.querySelector("#player");
    let compScore = document.querySelector("#computer");
    let computerScore = parseInt(compScore.textContent);
    let userScore = parseInt(playerScore.textContent);


    //Get computer input
    computerSelection = getComputerChoice();

    //compare the input from the user and the random output of the computer
    if (playerSelection == computerSelection) {
        outcome = 2
    }
    else if (playerSelection == "Rock") {
        if (computerSelection == "Paper") {
            outcome = 0;
        }
        else {
            outcome = 1;
        }
    }
    else if (playerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            outcome = 0;
        }
        else {
            outcome = 1;
        }
    }
    else {
        if (computerSelection == "Scissors") {
            outcome = 0;
        }
        else {
            outcome = 1;
        }
    }

    //compare player selection to computer chioce.
    let computer = getComputerChoice();
    console.log(computer);

    if (outcome == 0) {
        alert(`You Lose! ${computer} beats ${playerSelection}!`);
        computerScore++;
    }
    else if (outcome == 1){
        alert(`You Win! ${playerSelection} beats ${computer}!`);
        userScore++;
    }
    else {
        alert(`Its a tie! Try again!`);
    }

    //update score on the display
    playerScore.textContent = `${userScore}`;
    compScore.textContent = `${computerScore}`; 
}

function game() { 
    let playerScore = document.querySelector("#player");
    let compScore = document.querySelector("#computer");
    let computerScore = parseInt(compScore.textContent);
    let userScore = parseInt(playerScore.textContent);

    //change to check if usersccore and comp score = 5
    if (computerScore + userScore >= 5) {
        if (computerScore > userScore) {
            compScore.textContent = 0;
            playerScore.textContent = 0;
            alert("You Lost... :/");
        }
        else {
            compScore.textContent = 0;
            playerScore.textContent = 0;
            alert ("You Won!");
        }
    }
    /*
    let rock = document.querySelector('.rock');
    let paper =  document.querySelector('.paper');
    let scissors = document.querySelector('.scissors');
    rock.addEventListener('click', function() {
        input = "Rock";
        return input;
    });
    paper.addEventListener('click', function() {
        input = "Paper";
        return input;
    });
    scissors.addEventListener('click', function() {
        input = "Scissors";
        return input;
    });
    */
}