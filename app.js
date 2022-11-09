const startBtn = document.querySelector("#start-button")
const starterTemplate = document.querySelector(".starter")
const game = document.querySelector(".game-wrapper")
const choices = document.querySelector("#choices")
const displayHands = document.querySelectorAll(".hands")
const userHand = document.querySelector(".user-hand")
const randomHand = document.querySelector(".random-hand")
const showResultBtn = document.querySelector("#go")

startBtn.addEventListener("click", () => {
    starterTemplate.classList.add("hide")
    game.classList.remove("hide")
    getRandomChoice()
})



let userChoice;
    choices.addEventListener("change", () => {
        userChoice = choices.selectedIndex
        if(userChoice == 0){
            userChoice =  "rock"
        } else if(userChoice == 1){
            userChoice = "paper"
        } else {
            userChoice = "scissors"
        }
    
        return userChoice  
    })



const hands = ["rock", "paper", "scissors"]

let randomChoice;
function getRandomChoice() {
    let randomNumber = Math.floor((Math.random())* 3) + 1
    if(randomNumber == 1){
        randomChoice = hands[0]
    } else if ( randomNumber == 2) {
        randomChoice = hands[1]
    } else {
        randomChoice = hands[2]
    }
    return randomChoice
}

function showChoices () {
    userHand.src = `./assets/${userChoice}.png`
    randomHand.src = `./assets/${randomChoice}.png`
    console.log({userChoice});
    console.log({randomChoice});
}

showResultBtn.addEventListener("click", () => {
    getRandomChoice()
    showChoices()
})



