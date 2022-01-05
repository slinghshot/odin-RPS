/*
computerPlay() => generates a number between 0, 1 or 2.
Then return rock, paper or scissor based on the integer value.
*/
function computerPlay(){
    let x = Math.floor(Math.random() * 3); // 0:rock, 1:paper, 2:scissors
    let compChoice="";
    switch(x){
        case 0:
            compChoice="Rock";
            break;
        case 1:
            compChoice="Paper";
            break;
        case 2:
            compChoice="Scissors";
            break;
    }
    return compChoice;
}



function playRound(playerSelection, computerSelection){
    let playerWins=false;
    if(playerSelection.toLowerCase()==computerSelection.toLowerCase()){ 
        console.log("Both chose "+ computerSelection + " tie!");
        return("tie");
    }else{
        
        switch(playerSelection.toLowerCase()){
            case "rock":
                computerSelection=="Scissors"?playerWins=true:playerWins=false;
                break;
            case "paper":
                computerSelection=="Rock"?playerWins=true:playerWins=false;
                break;
            case "scissors":
                computerSelection=="Paper"?playerWins=true:playerWins=false;
                break;
        }
        console.log(playerWins?("You win! "+ playerSelection + " beats "+computerSelection):("You lose! " +computerSelection + " beats "+playerSelection));
        return(playerWins);
    }
    
}


function game(){
    let winCount=0;
    let lossCount=0;

    for(let i =0;i<5;i++){    
        let computerSelection = computerPlay();
        //console.log(computerSelection);
        let playerSelection="";
        do
        playerSelection = prompt("Enter rock, paper or scissors or EXIT to quit");
        while(playerSelection==null)

        
        if(playerSelection.toLowerCase()=="exit"){
            break;
        }
        let results=(playRound(playerSelection, computerSelection));
        if(results=="tie"){
            console.log("tied");
        }else if(results==true){
            winCount++;
        }
        else if(results==false){
            lossCount++;
        }
    }
    console.log("number of wins "+ winCount);
    console.log("number of loss "+ lossCount);
    //console.log("number of ties: "+ (5-(winCount+lossCount)));
}
function help(){
    console.log("to play use game()\nThis will launch a game with 5 rounds!");
}

