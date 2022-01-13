var choices = ["rock","paper","scissors"];
var scoreChoices=['userScore','cpuScore','tieScore'];
var scoreHeader=['uScore','tScore','cScore'];
var historyTitleShown=false;

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

function clearBorderChoice(){
    
    for(let i =0;i<choices.length;i++){
        const cpuChoice=document.getElementById(`${choices[i]}`);
        // console.log(cpuChoice);
        cpuChoice.classList.remove("cpuChoice");
        cpuChoice.classList.remove("win");
        cpuChoice.classList.remove("loss");
        cpuChoice.classList.remove("userClicked");
        cpuChoice.classList.remove("tie");
    }
    for(let i =0;i<scoreHeader.length;i++){
        let headerVars=document.getElementById(`${scoreHeader[i]}`);
        headerVars.classList.remove(`${scoreHeader[i]}`);
    }
    let winStatus=document.querySelector('#winnerStatus');
    if(winStatus.textContent!=""){
        winStatus.textContent="";
        winStatus=document.querySelector('.gameStatus');
        winStatus.style.cssText="background-color: transparent";
        
    }
    
    
}
 

/*
if win, highlight green ;
if loss highlight choice red;
if tie highlight yellow/orange?

*/
function playRound(e){
    e.stopPropagation();
    // console.log(e);
    
    let playerSelection=e.target.id;
    if (playerSelection=="userOptContainer" || !playerSelection) return;
    console.log(playerSelection);
    clearBorderChoice();
    let computerSelection = computerPlay();
    let playerWins=false;

    if(playerSelection.toLowerCase()==computerSelection.toLowerCase()){ 
        setTie(playerSelection);
        
    }else{
        //const cpuChoices = document.querySelectorAll
        const cpuChoice=document.getElementById(`${computerSelection.toLowerCase()}`);
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
        // console.log(playerWins?("You win! "+ playerSelection + " beats "+computerSelection):("You lose! " +computerSelection + " beats "+playerSelection));
        setScore(playerWins, playerSelection);
    }
    
}

function addHistoryMatches(winner){
    //Show hidden text
    if(historyTitleShown==false){
        let historyContainer=document.getElementById('historyTitle');
        historyContainer.removeAttribute('hidden');
        historyTitleShown=true;
    }
    
    let userScore,cpuScore;
    let scoreChoice=document.getElementById(`${scoreChoices[0]}`);
    userScore=scoreChoice.textContent;
    scoreChoice=document.getElementById(`${scoreChoices[1]}`);
    cpuScore=scoreChoice.textContent;

    
    
    historyContainer=document.getElementById('historyOList');
    // console.log(historyContainer);
    const matchScore=document.createElement('li');
    matchScore.classList.add("historyScore");
    matchScore.textContent=`You ${winner} | Your Score: ${userScore} | CPU score: ${cpuScore}`;
    historyContainer.appendChild(matchScore);
}
function setTie(playerSelection){
    let headerVars=document.getElementById('tScore');
    headerVars.classList.add('tScore');

    const choice=document.getElementById(`${playerSelection}`);
    choice.classList.add('tie');

    // console.log("Both chose "+ playerSelection + " tie!");
    let getScore=document.getElementById('tieScore');
    getScore.textContent=1+parseInt(getScore.textContent);

}
function setScore(playerWins,playerSelection){
    let getScore;
    const playerChoice = document.getElementById(`${playerSelection}`);
    playerChoice.classList.add("userClicked");

    if(playerWins){
        let headerVars=document.getElementById('uScore');
        headerVars.classList.add('uScore');
        playerChoice.classList.add("win");
        getScore=document.getElementById('userScore');
        const score = parseInt(getScore.textContent)
        getScore.textContent=1+score;
        if(score+1>=5){
            // alert("you win!");
            clearBorderChoice();
            addHistoryMatches("Won");
            resetScore();
            setWinnerAlert("Win");
            
        }
    }
    else{
        let headerVars=document.getElementById('cScore');
        headerVars.classList.add('cScore');
        playerChoice.classList.add("loss");
        getScore = document.getElementById('cpuScore');
        const score = parseInt(getScore.textContent);
        getScore.textContent=1+parseInt(getScore.textContent);            
        if(score+1>=5){
            clearBorderChoice();
            addHistoryMatches("Lost");
            resetScore();
            setWinnerAlert("Lose");
        }
    }
}
function setWinnerAlert(status){
    let winStatus = document.getElementById('winnerStatus');
    let winStatue=document.querySelector('.gameStatus');
    winStatus.textContent=`You ${status}!`;
    winStatue.style.cssText="background-color: yellow !important";

}
function resetScore(){
    for(let i=0;i<scoreChoices.length;i++){
        let score=document.getElementById(`${scoreChoices[i]}`);
        score.textContent=0;
    }
    
}

function playRoundT(e){
    console.log(e);
    e.stopPropagation();
}


const options = document.querySelectorAll('.userOptions');
options.forEach(option=>option.addEventListener('click',playRound));
options.forEach(option=>option.addEventListener('mouseover',function(e){
    
    e.stopPropagation();
    // console.log(e);
    if(e.target.id == "rock" || e.target.id=="paper"||e.target.id=="scissors"){
        e.target.style.cssText="display:block";
        e.target.style.cssText="transform:scale(1.05)";
        // e.target.style.cssText="border: 8px solid white";
        e.target.style.cssText="outline:none";
        e.target.style.cssText="box-shadow: 0 0 10px white";
        
        
        return;
    }
    // console.log(e.target);
    for(let i=0;i<choices.length;i++){
        const selectItem=document.getElementById(`${choices[i]}`);
        selectItem.style.cssText="border: 8px solid transparent";
    }
}));

