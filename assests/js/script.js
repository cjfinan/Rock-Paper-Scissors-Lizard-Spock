
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
    
    let roundOutcome = checkAnswer(userAnswer)
    console.log(roundOutcome)

    if (roundOutcome === 1){
        let userScore = parseInt(document.getElementById("user-score-number").innerHTML)
        document.getElementById("user-score-number").innerHTML = ++userScore;
        document.getElementById("user-score-number").style.color = "rgb(32, 247, 90)"
        document.getElementById("game-area-results").style.borderColor = "rgb(32, 247, 90)"
        document.getElementById("game-area").style.borderColor = "rgb(32, 247, 90)"
        setTimeout(userScoreChange, 500)
     

    }else if (roundOutcome === 2){
        let computerScore = parseInt(document.getElementById("computer-score-number").innerHTML)
    document.getElementById("computer-score-number").innerHTML = ++computerScore;
    document.getElementById("computer-score-number").style.color = "red"
    }

}

function checkAnswer(userAnswer){

    let randomAnswer = computerChoice();
    console.log(randomAnswer);

    if (randomAnswer === userAnswer){
        document.getElementById("game-result").innerHTML = "Draw! Try Again"
        return 3;
    }

   

switch(userAnswer){
    case "rock":
        if ((randomAnswer === "lizard") || (randomAnswer === "scisscors")){
            document.getElementById("game-result").innerHTML = `Well Done! ${userAnswer} beats ${randomAnswer}!`
            return 1;
        } else {
            document.getElementById("game-result").innerHTML = `Unlucky! ${randomAnswer} beats ${userAnswer}!`
            return 2;
        }
       
    case "paper":
        if ((randomAnswer === "rock") || (randomAnswer === "spock")){
            document.getElementById("game-result").innerHTML = `Well Done! ${userAnswer} beats ${randomAnswer}!`
            return 1;
        } else {
            document.getElementById("game-result").innerHTML = `Unlucky! ${randomAnswer} beats ${userAnswer}!`
            return 2;
    
    }

    case "scissors":
        if ((randomAnswer === "paper") || (randomAnswer === "lizard")){
            document.getElementById("game-result").innerHTML = `Well Done! ${userAnswer} beats ${randomAnswer}!`
            return 1;
        } else{
            document.getElementById("game-result").innerHTML = `Unlucky! ${randomAnswer} beats ${userAnswer}!`
            return 2;
        }
  

     case "lizard":
        if ((randomAnswer === "spock") || (randomAnswer === "paper")){
            document.getElementById("game-result").innerHTML = `Well Done! ${userAnswer} beats ${randomAnswer}!`
            return 1;
        } else {
            document.getElementById("game-result").innerHTML = `Unlucky! ${randomAnswer} beats ${userAnswer}!`
            return 2;
        } 

    case "spock":
        if ((randomAnswer === "rock") || (randomAnswer === "scissors")){
            document.getElementById("game-result").innerHTML = `Well Done! ${userAnswer} beats ${randomAnswer}!`
            return 1;
        } else {
            document.getElementById("game-result").innerHTML = `Unlucky! ${randomAnswer} beats ${userAnswer}!`
            return 2;
        }
}

}

function rules(){
    rulesButton.style.height = "200px";
    rulesButton.style.textAlign = "center"
    rulesButton.innerHTML=`Click on a icon to play vs the computer! <br> The rules are as follows: Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors. Have FUN!`
}

function userScoreChange(){
    document.getElementById("user-score-number").style.color = "white"
    document.getElementById("game-area-results").style.borderColor = "white"
    document.getElementById("game-area").style.borderColor = "white"
}