let play;
function getComputerChoice(){
    play = Math.random()
    if(play>2/3){
        return("Rock");
    } else if(play>1/3){
        return("Paper");
    } else {
        return("Scissors");
    }
    
}
