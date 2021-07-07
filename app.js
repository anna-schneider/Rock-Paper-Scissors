let playerScore = 0
let puterScore = 0
let playerChoice = undefined

const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const rulesModal = document.getElementById('modal')
const blackBack = document.querySelector('.rules-container');

//Show game's rules
  openBtn.addEventListener('click',()=>{
  rulesModal.style.display = 'flex';
  blackBack.style.display='flex';
});

//Hide game's rules
  closeBtn.addEventListener('click',()=>{
  rulesModal.style.display = 'none';
  blackBack.style.display='none';
});


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