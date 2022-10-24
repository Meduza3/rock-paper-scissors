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

let input = prompt("What is your move?").toLowerCase();

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

console.log(playRound(input,getComputerChoice()));
