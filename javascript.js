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
console.log(getComputerChoice());
let input = prompt("What is your move?").toLowerCase();
console.log(input);