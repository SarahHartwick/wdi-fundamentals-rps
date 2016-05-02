

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

var getPlayerMove = function(move) {

    return move || getInput();
}

var getComputerMove = function(move) {
 
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
   
    if(playerMove === computerMove){
        winner = "tie"
    }
    else if(playerMove === "rock") {
        if(computerMove === "scissors") {
            winner = "player"
        }
        else {
            winner = "computer"
        }
    }
    else if(playerMove === "paper") {
        if(computerMove === "rock") {
            winner = "player"
        }
        else {
            winner = "computer"
        }
    }
    else {
        if(computerMove === "paper"){
            winner = "player"
        }
        else {
            winner = "computer"
        }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while(playerWins < 5 && computerWins < 5) {
        var playerChoice = getPlayerMove();
        var computerChoice = getComputerMove();

        if (getWinner(playerChoice, computerChoice) === "computer") {
            computerWins += 1;
        }
        else if (getWinner(playerChoice, computerChoice) === "player") {
            playerWins += 1
        }
        console.log("The Player chose " + playerChoice + " and the Computer chose " + computerChoice);
        console.log("The Player's score is " + playerWins + " and the Computer's score is " + computerWins);
    }
    return [playerWins, computerWins];
}
playToFive();
