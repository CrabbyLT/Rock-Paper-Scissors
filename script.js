function computerPlay() {
    let num = Math.floor(Math.random() * (3-0))+1;
    switch (num) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors"
    }
}
function playRound(playerSelection ,computerSelection) {
    switch (playerSelection.toLowerCase()) {
        case "rock":
            if(computerSelection.toLowerCase() === "scissors"){
                return 1;
            }
            else return 0;
        case "paper":
            if(computerSelection.toLowerCase() === "rock"){
                return 1;
            }
            else return 0;
        case "scissors":
            if (computer.computerSelection.toLowerCase() === "paper") {
                return 1;
            } 
            else return 0;
        default:
           return 2;
    }
}
function winAlert(selection) {
    switch (selection.toLowerCase()) {
        case "rock":
            alert("You win! Rock beats scissors!");
            break;
        case "paper":
            alert("You win! Paper beats rock!");
            break;
        case "scissors":
            alert("You win! Scissors beats paper!");
            break;
    }
}
function loseAlert(selection) {
    switch (selection.toLowerCase()) {
        case "rock":
            alert("You lose! Paper beats rock!");
            break;
        case "paper":
            alert("You lose! Scissors beats paper!");
            break;
        case "scissors":
            alert("You lose! Rock beats scissors!");
            break;
    }
}
function game() {
    let computerScore = 0;
    let playerScore = 0;
    let roundLimit = document.getElementById("rounds").value;
    for (let round = 1; round <= Number(roundLimit); round++) {
        let playerSelection = prompt("Choose rock, paper or scissors");
        if(playRound(playerSelection, computerPlay()) === 1){
            winAlert(playerSelection.toLowerCase());
            playerScore++;
        }
        else if(playRound(playerSelection, computerPlay()) === 0){
            loseAlert(playerSelection.toLowerCase());
            computerScore++;
        }
        else {
            roundLimit++;
            alert("TIE!");
        }
    }
    let playerState = "";
    if(playerScore > computerScore){
        playerState = "win";
    }
    else if (playerScore < computerScore) {
        playerState = "lose"
    }
    else playerState = "tied"
    alert(`You ${playerScore} - ${computerScore} computer. You ${playerState}`);
}
