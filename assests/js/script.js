let buttons = document.getElementsByClassName("btn")

for(let button of buttons){
   button.addEventListener("click", userChoice)
}
  
function userChoice(){
    let userAnswer = this.getAttribute("id")
console.log(this.getAttribute("id"))


let randomNum = Math.floor(Math.random() * buttons.length);
let randomChoice = buttons[randomNum]
let randomChoiceId = randomChoice.getAttribute("id")
console.log(randomChoiceId)

}

function computerChoice(){
  
    
    
}


