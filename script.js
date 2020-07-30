// Using Colored Regions extension on VS Code
// VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=mihelcic.colored-regions

//#region[rgba(50,215,200,0.2)] HTML variables

let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissors");
let player_score = 0;
let computer_score = 0;
let playerScore = document.getElementById("pScore");
let computerScore = document.getElementById("cScore");
let roundLimit = document.getElementById("rounds");

let playBtn = document.getElementById("play");
let buttons = document.getElementById("buttons");
let roundMsg = document.getElementById("roundMsg");

//#endregion

//#region[rgba(50,200,35,0.1)] JS variables

const CHOICES = {
    rock: "rock",
    paper:"paper",
    scissors:"scissors"
}

//#endregion

//#region[rgba(0,0,255,0.1)] Game Functions

function computerPlay() {
    let num = Math.floor(Math.random() * (3-0))+1;
    switch (num) {
        case 1:
            return CHOICES.rock;
        case 2:
            return CHOICES.paper;
        case 3:
            return CHOICES.scissors;
    }
}

function winAlert(selection) {
    switch (selection.toLowerCase()) {
        case "rock":
            roundMsg.innerHTML = "You win! Rock beats scissors!";
            break;
        case "paper":
            roundMsg.innerHTML = "You win! Paper beats rock!";
            break;
        case "scissors":
            roundMsg.innerHTML = "You win! Scissors beats paper!";
            break;
    }
}

function loseAlert(selection) {
    switch (selection.toLowerCase()) {
        case "rock":
            roundMsg.innerHTML = "You lose! Paper beats rock!";
            break;
        case "paper":
            roundMsg.innerHTML = "You lose! Scissors beats paper!";
            break;
        case "scissors":
            roundMsg.innerHTML = "You lose! Rock beats scissors!";
            break;
    }
}

function playRound(playerSelection ,computerSelection) {
    switch (playerSelection) {
        case "rock":
            if(computerSelection === "scissors" ){
                return 1;
            }
            else return 0;
        case "paper":
            if(computerSelection === "rock"){
                return 1;
            }
            else return 0;
        case "scissors":
            if (computerSelection === "paper") {
                return 1;
            } 
            else return 0;
    }
}

function updateScore(choice) {
    if(playRound(choice, computerPlay()) === 1){
        player_score += 1;
        playerScore.innerHTML = player_score.toString();
        winAlert(choice);
    } else if(playRound(choice, computerPlay()) === 0){
        computer_score += 1;
        computerScore.innerHTML = computer_score
        loseAlert(choice);
    }
}


//#endregion


//#region[rgba(100,100,25,0.15)] JS DOM Event Listeners

playBtn.onclick = function() {
    buttons.style.visibility = "visible";
    document.getElementById("gameIntro").style.visibility = "hidden";
    document.getElementById("gameInfo").style.visibility = "visible";
    document.getElementById("maxRounds").innerHTML = roundLimit.value;
};
rockBtn.onclick = function () {
    updateScore(CHOICES.rock)
};
paperBtn.onclick = function () {
    updateScore(CHOICES.paper)
};
scissorsBtn.onclick = function () {
    updateScore(CHOICES.scissors)
};

//#endregion