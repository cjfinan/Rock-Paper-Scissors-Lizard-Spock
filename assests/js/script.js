
let rulesButton = document.getElementById("rules-button");
rulesButton.addEventListener("click", rules);

let buttons = document.getElementsByClassName("btn");

for(let button of buttons) {
  button.addEventListener("click", runRound);
}



    

function computerChoice(){
    let randomNum = Math.floor(Math.random() * buttons.length);
    let randomChoice = buttons[randomNum];
    let randomChoiceId = randomChoice.getAttribute("id");
    return randomChoiceId;
}

function runRound(){ 
    let userAnswer = this.getAttribute("id");
    console.log(userAnswer);
    
    let roundOutcome = checkAnswer(userAnswer);
    console.log(roundOutcome);

    let userScore = parseInt(document.getElementById("user-score-number").innerHTML);
    let computerScore = parseInt(document.getElementById("computer-score-number").innerHTML);


    if (roundOutcome === 1){
        document.getElementById("user-score-number").innerHTML = ++userScore;
        document.getElementById("user-score-number").style.color = "rgb(32, 247, 90)";
        document.getElementById("game-area-results").style.borderColor = "rgb(32, 247, 90)";
        document.getElementById("game-area").style.borderColor = "rgb(32, 247, 90)";
        setTimeout(userScoreChange, 300);
      }else if (roundOutcome === 2){
        document.getElementById("computer-score-number").innerHTML = ++computerScore;
        document.getElementById("computer-score-number").style.color = "rgb(224, 25, 18)";
        document.getElementById("game-area-results").style.borderColor = "rgb(224, 25, 18)";
        document.getElementById("game-area").style.borderColor = "rgb(224, 25, 18)";
        setTimeout(computerScoreChange, 300);
    } 
    
    
    if (userScore === 5){
       document.getElementById("game-area-results").style.height = "130px";
       document.getElementById("game-area-results").style.width = "80%";
       document.getElementById("game-area-results").style.backgroundColor = "green";
       document.getElementById("game-result").innerHTML = `<strong>CONGRATULATIONS!</strong> you have beaten the computer! <br> The page will now refresh if you would like to try again!`;
       setTimeout(hideButtons, 50);
       setTimeout(endGame, 7000);
    }else if (computerScore === 5){
        document.getElementById("game-area-results").style.height = "130px";
        document.getElementById("game-area-results").style.width = "80%";
        document.getElementById("game-area-results").style.backgroundColor = "rgb(224, 25, 18)";
        document.getElementById("game-result").innerHTML = `<strong>IS THAT THE BEST YOU CAN DO?!</strong> <br> The page will now refresh if you would like to try again!`;
        setTimeout(hideButtons, 50);
        setTimeout(endGame, 7000);
    }

}

function checkAnswer(userAnswer){

    let randomAnswer = computerChoice();
    console.log(randomAnswer);

    if (randomAnswer === userAnswer){
        document.getElementById("game-result").innerHTML = "Draw! Try Again";
        return 3;
    }

switch(userAnswer){
    case "rock":
        if ((randomAnswer === "lizard") || (randomAnswer === "scissors")){
            document.getElementById("game-result").innerHTML = `Well Done! ${userAnswer} beats ${randomAnswer}!`;
            return 1;
        } else {
            document.getElementById("game-result").innerHTML = `Unlucky! ${randomAnswer} beats ${userAnswer}!`;
            return 2;
        }
       
    case "paper":
        if ((randomAnswer === "rock") || (randomAnswer === "spock")){
            document.getElementById("game-result").innerHTML = `Well Done! ${userAnswer} beats ${randomAnswer}!`;
            return 1;
        } else {
            document.getElementById("game-result").innerHTML = `Unlucky! ${randomAnswer} beats ${userAnswer}!`;
            return 2;
    
    }

    case "scissors":
        if ((randomAnswer === "paper") || (randomAnswer === "lizard")){
            document.getElementById("game-result").innerHTML = `Well Done! ${userAnswer} beats ${randomAnswer}!`;
            return 1;
        } else{
            document.getElementById("game-result").innerHTML = `Unlucky! ${randomAnswer} beats ${userAnswer}!`;
            return 2;
        }
  

     case "lizard":
        if ((randomAnswer === "spock") || (randomAnswer === "paper")){
            document.getElementById("game-result").innerHTML = `Well Done! ${userAnswer} beats ${randomAnswer}!`;
            return 1;
        } else {
            document.getElementById("game-result").innerHTML = `Unlucky! ${randomAnswer} beats ${userAnswer}!`;
            return 2;
        } 

    case "spock":
        if ((randomAnswer === "rock") || (randomAnswer === "scissors")){
            document.getElementById("game-result").innerHTML = `Well Done! ${userAnswer} beats ${randomAnswer}!`;
            return 1;
        } else {
            document.getElementById("game-result").innerHTML = `Unlucky! ${randomAnswer} beats ${userAnswer}!`;
            return 2;
        }
}

}

function rules(){
    rulesButton.style.height = "300px";
    rulesButton.style.textAlign = "center";
    rulesButton.style.fontSize = "25px";
    rulesButton.innerHTML=`<span id="rules-button-text">Click on a icon to play vs the computer! <br> The rules are as follows: Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors. Have FUN!</span>`;
}

function userScoreChange(){
    document.getElementById("user-score-number").style.color = "white";
    document.getElementById("game-area-results").style.borderColor = "white";
    document.getElementById("game-area").style.borderColor = "white";
}

function computerScoreChange(){
    document.getElementById("computer-score-number").style.color = "white";
    document.getElementById("game-area-results").style.borderColor = "white";
    document.getElementById("game-area").style.borderColor = "white";
}

function endGame(){
    window.location.reload();
}

function hideButtons(){
    for(let button of buttons) {
        button.style.display = "none";
      }
}
