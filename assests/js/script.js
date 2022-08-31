
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
    console.log(randomChoiceId, "this is the computers choice");
    return randomChoiceId;
}

function runRound(){ 
    let userAnswer = this.getAttribute("id");
    console.log(userAnswer);
    
    let roundOutcome = checkAnswer(userAnswer)
    console.log(roundOutcome)
}


function checkAnswer(userAnswer){

    let randomAnswer = computerChoice();

    if (randomAnswer === userAnswer){
        document.getElementById("game-result").innerHTML = "Draw! Try Again"
        return 3;
    }

switch(userAnswer){
    case "rock":
        if (randomAnswer === "lizard" || "scisscors"){
            document.getElementById("game-result").innerHTML = `Well Done! ${userAnswer} beats ${randomAnswer}!`
            return 1;
        } else {
            return 0;
        }
       
    case "paper":
        if (randomAnswer === "rock" || "spock"){
            return 1;
        } else {
            return 0;
    
    }

    case "scissors":
        if (randomAnswer === "paper" || "lizard"){
            return 1;
        } else{
            return 0;
        }
  

     case "lizard":
        if (randomAnswer === "spock" || "paper"){
            return 1;
            
        } else {
            return 0;
        } 

    case "spock":
        if (randomAnswer === "rock" || "scissors"){
            return 1;
        } else {
            return 0;
        }
}

}

function incrementUserScore(){
    let userScore = parseInt(document.getElementById("user-score-number").innerHTML)
    document.getElementById("user-score-number").innerHTML = ++userScore;
}

function incrementComputerScore(){
    let computerScore = parseInt(document.getElementById("computer-score-number").innerHTML)
    document.getElementById("computer-score-number").innerHTML = ++computerScore;
}

function rules(){
    rulesButton.style.height = "200px";
    rulesButton.style.textAlign = "center"
    rulesButton.innerHTML=`Click on a icon to play vs the computer! <br> The rules are as follows: Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors. Have FUN!`
}