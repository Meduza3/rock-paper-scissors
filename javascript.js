let play;
function getComputerChoice(){
    play = Math.random()
    if(play>2/3){
        return("rock");
    } else if(play>1/3){
        return("paper");
    } else {
        return("scissors");
    }
    
}

let input;
function getPlayerChoice(){
    return(prompt("What is your move?").toLowerCase());
}
function playRound(playerMove, cpuMove){
    if(playerMove == "rock"){
        if(cpuMove == "rock") return("Draw");
        if(cpuMove == "paper") return("CPU wins");
        if(cpuMove == "scissors") return("Player wins");
    } else if(playerMove == "paper"){
        if(cpuMove == "rock") return("Player wins");
        if(cpuMove == "paper") return("Draw");
        if(cpuMove == "scissors") return("CPU wins");
    } else if(playerMove == "scissors"){
        if(cpuMove == "rock") return("CPU wins");
        if(cpuMove == "paper") return("Player wins");
        if(cpuMove == "scissors") return ("Draw");
    }
}
let playerScore;
let cpuScore;

function game(numberOfGames){
    playerScore = 0;
    cpuScore = 0;

    for(let i=0; i<numberOfGames; i++){
        //let p = getPlayerChoice();
       // let c = getComputerChoice();
        if(playRound(getPlayerChoice(), getComputerChoice())=="playerWins"){
            console.log("The player wins this round.");
            playerScore++;
        } 
        if(playRound(getPlayerChoice(), getComputerChoice())=="CPU wins"){
            console.log("The CPU wins this round.");
            cpuScore++;
        }
    }
    if(playerScore>cpuScore) console.log("The player wins the whole game "+playerScore+" to "+cpuScore);
    if(playerScore<cpuScore) console.log("The CPU wins the whole game "+cpuScore+" to "+playerScore);
    if(playerScore==cpuScore) console.log("The game ends in a draw of "+playerScore+" to "+cpuScore);
}

game(5);