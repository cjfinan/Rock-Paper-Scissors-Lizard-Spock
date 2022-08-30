

let buttons = document.getElementsByClassName("btn")

for(let button of buttons){
   button.addEventListener("click", userChoice)
}
  
function userChoice(computerChoice){
    let userAnswer = this.getAttribute("id")
console.log(this.getAttribute("id"))
}

function computerChoice(){
    let randomNum = Math.floor(Math.random() * buttons.length);
    let randomChoice = buttons[randomNum]
    let randomChoiceId = randomChoice.getAttribute("id")
    console.log(randomChoiceId)
}

function runGame(userAnswer){
    if(userAnswer === "rock" && randomChoiceId === "rock"){
        document.getElementById("game-result").innerHTML = "YOU ROCK"
    }
}

