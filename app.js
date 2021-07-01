let playerScore = 0
let puterScore = 0
let playerChoice = undefined

// Function to check for winner

function checkForWinner() {

  if (playerChoice === puterChoice) {
    result.innerText = "tie"
  } else if (playerChoice === "scissors" && puterChoice === "paper"
    || playerChoice === "paper" && puterChoice === "rock"
    || playerChoice === "rock" && puterChoice === "scissors") {
    playerScoreUpdate()
    result.innerText = "you win"
  } else {
    result.innerText = "you lose"
    puterScoreUpdate
  }
}

// Computer's choice
function puterChoice() {

}

// Updating scores
function playerScoreUpdate() {
  playerScore++
}

function puterScoreUpdate() {
  puterScore++
}