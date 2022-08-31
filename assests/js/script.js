let rulesButton = document.getElementById("rules-button")
rulesButton.addEventListener("click", rules)


let buttons = document.getElementsByClassName("btn")

for(let button of buttons){
   button.addEventListener("click", userChoice);
    let userAnswer = this.getAttribute("id");
}


function computerChoice(){
    let randomNum = Math.floor(Math.random() * buttons.length);
    let randomChoice = buttons[randomNum];
    let randomChoiceId = randomChoice.getAttribute("id");
    console.log(randomChoiceId);
    return randomChoiceId;
}

function runGame(userChoice, computerChoice){
    let randomAnswer = computerChoice();

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