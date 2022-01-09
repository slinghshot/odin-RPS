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

function clearCPUChoice(){
    const choices = ["rock","paper","scissors"];
    for(let i =0;i<choices.length;i++){
        const cpuChoice=document.getElementById(`${choices[i]}`);
        console.log(cpuChoice);
        cpuChoice.classList.remove("cpuChoice");
    }
}
 
function playRound(e){
    e.stopPropagation();
    clearCPUChoice();
    
    let playerSelection=e.target.id;
    if (!playerSelection) return;

    let computerSelection = computerPlay();
    let playerWins=false;

    if(playerSelection.toLowerCase()==computerSelection.toLowerCase()){ 
        console.log("Both chose "+ computerSelection + " tie!");
        let getScore=document.getElementById('tieScore');
        getScore.textContent=1+parseInt(getScore.textContent);
    }else{
        //const cpuChoices = document.querySelectorAll
        const cpuChoice=document.getElementById(`${computerSelection.toLowerCase()}`);
        
        //console.log(cpuChoice);
        cpuChoice.classList.add("cpuChoice");
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
        setScore(playerWins);
    }
    
}
function setScore(playerWins){
    let getScore;
    if(playerWins){
        getScore=document.getElementById('userScore');
        const score = parseInt(getScore.textContent)
        getScore.textContent=1+score;
        if(score+1>=5){
            alert("you win!");
            resetScore();
        }
    }
    else{
        getScore = document.getElementById('cpuScore');
        const score = parseInt(getScore.textContent);
        getScore.textContent=1+parseInt(getScore.textContent);            
        if(score+1>=5){
            alert("you lose!");
            resetScore();
            
        }
    }
}

function resetScore(){
    let score=document.getElementById('userScore');
    score.textContent=0;
    score=document.getElementById('cpuScore');
    score.textContent=0;
    score=document.getElementById('tieScore');
    score.textContent=0;
    clearCPUChoice();
}

// function game(){
//     let winCount=0;
//     let lossCount=0;

//     for(let i =0;i<5;i++){    
//         let computerSelection = computerPlay();
//         //console.log(computerSelection);
//         let playerSelection="";
//         do
//         playerSelection = prompt("Enter rock, paper or scissors or EXIT to quit");
//         while(playerSelection==null)

        
//         if(playerSelection.toLowerCase()=="exit"){
//             break;
//         }
//         let results=(playRound(playerSelection, computerSelection));
//         if(results=="tie"){
//             console.log("tied");
//         }else if(results==true){
//             winCount++;
//         }
//         else if(results==false){
//             lossCount++;
//         }
//     }
//     console.log("number of wins "+ winCount);
//     console.log("number of loss "+ lossCount);
//     //console.log("number of ties: "+ (5-(winCount+lossCount)));
// }
function playRoundT(e){
    console.log(e);
    e.stopPropagation();
}

const options = document.querySelectorAll('.userOptions');
options.forEach(option=>option.addEventListener('click',playRound));

