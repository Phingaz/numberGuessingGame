'use strict'

let score = 20
let secretNumber = Math.trunc((Math.random() * 20) + 1)
let highscore = 0

const displayMsg = function(message) {
     return document.querySelector(".message").textContent = message
}

document.querySelector(".check").addEventListener("click", (e) => {
    console.log(secretNumber);
    const guess = Number( document.querySelector(".guess").value )
    //If no inout
    if(!guess) {
        displayMsg("Enter a number!!")
    }
    //If player wins
    else if (guess === secretNumber) {
        displayMsg("Correct!!!")
        document.querySelector(".number").textContent = secretNumber
        document.querySelector("body").style.background = "#60b347"
        document.querySelector(".number").style.width = "#30rem"
        
        if(score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore 
        }
    }
    //If player loses
    else if(guess !== secretNumber) {
        if (score > 0) {
            guess > secretNumber ? displayMsg("Too high") : displayMsg("Too low")
            score--
            document.querySelector(".score").textContent = score
        }
        else {
            displayMsg("You lost the game!!")
            document.querySelector("body").style.background = "red"
            document.querySelector(".number").style.width = "#30rem"
            document.querySelector(".score").textContent = 0
        }
    }
})

document.querySelector(".again").addEventListener("click", () => {
    score = 20
    secretNumber = Math.trunc((Math.random() * 20) + 1)
    document.querySelector("body").style.background = ""
    displayMsg("Start Guessing...")
    document.querySelector(".score").textContent = score        
    document.querySelector(".number").textContent = "?"        
    document.querySelector(".guess").value = ""        
})


