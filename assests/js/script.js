let rulesButton = document.getElementById("rules-button")
rulesButton.addEventListener("click", rules)


let buttons = document.getElementsByClassName("btn")

for(let button of buttons){
   button.addEventListener("click", userChoice)
}
  
function userChoice(computerChoice){
    let userAnswer = this.getAttribute("id")
console.log(this.getAttribute("id"))

let randomNum = Math.floor(Math.random() * buttons.length);
let randomChoice = buttons[randomNum]
let randomChoiceId = randomChoice.getAttribute("id")
console.log(randomChoiceId)
}

function computerChoice(){
    let randomNum = Math.floor(Math.random() * buttons.length);
    let randomChoice = buttons[randomNum]
    let randomChoiceId = randomChoice.getAttribute("id")
    console.log(randomChoiceId)
}

function runGame(userChoice, computerChoice){
    if(userAnswer === "rock" && randomChoiceId === "rock"){
        document.getElementById("game-result").innerHTML = "YOU ROCK"
    }
}

function rules(){
    rulesButton.style.height = "200px";
    rulesButton.style.textAlign = "center"
    rulesButton.innerHTML=`Click on a icon to play vs the computer! <br> The rules are as follows: Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors. Have FUN!`
}