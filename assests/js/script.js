
document.addEventListener("DOMContentLoaded", userChoice)



function userChoice(){
    let buttons = document.getElementsByClassName("btn")
console.log("test1")

for(let button of buttons){
    button.addEventListener("click", runGame)
    let gameType = button.getAttribute("data-type");
    runGame(gameType);
    console.log(gameType)
    }}

function computerChice(){}

function runGame(){}

function incrementUserScore(){}

function incrementComputerScore(){}

function results(){}

function endGame(){}