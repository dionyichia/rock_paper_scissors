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


function playRound (playerSelection, computerSelection) {
    //compare the input from the user and the random output of the computer
    if (playerSelection == computerSelection) {
        return 2
    }
    else if (playerSelection == "Rock") {
        if (computerSelection == "Paper") {
            return 0;
        }
        else {
            return 1;
        }
    }
    else if (playerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            return 0;
        }
        else {
            return 1;
        }
    }
    else {
        if (computerSelection == "Scissors") {
            return 0;
        }
        else {
            return 1;
        }
    }
}

function game() {
    //counter to count number of times games has been run
    let computerScore = 0;
    let userScore = 0;
    let input = "";

    for (let counter = 0; counter < 5; counter++) {
        //prompt the user for an input
        do {
            input = prompt("Rock, Paper or Scissors?");
            console.log(input);

        } while (input != "Rock" && input != "Paper" && input != "Scissors")
        console.log(1);
        //loop to run getComp and playRound 5 times
        let computer = getComputerChoice();
        console.log(computer);
        let score = playRound(input, computer); 
        if (score == 0) {
            alert(`You Lose! ${computer} beats ${input}!`);
            computerScore++;
        }
        else if (score == 1){
            alert(`You Win! ${input} beats ${computer}!`);
            userScore++;
        }
        else {
            alert(`Its a tie! Try again!`);
            counter--;
        }
        console.log (`counter : ${counter}`);
    }
    console.log (`userScore : ${userScore}`);
    console.log (`computerScore : ${computerScore}`); 

    if (computerScore > userScore) {
        alert("You Lost... :/");
    }
    else {
        alert ("You Won!");
    }
}
