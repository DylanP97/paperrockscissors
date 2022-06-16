const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoiceID
let userChoice
let computerChoice
let result
let timeout

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoiceID = e.target.id
    userChoice = e.target.innerHTML
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
    console.log (userChoice)
}))



function generateComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    if (randomNumber === 1) {
        computerChoice = 'Rock <i class="fa-solid fa-hand-back-fist"></i>'
    }

    if (randomNumber === 2) {
        computerChoice = 'Scissors <i class="fa-solid fa-hand-scissors"></i>'
    }

    if (randomNumber === 3) {
        computerChoice = 'Paper <i class="fa-solid fa-hand"></i>'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult () {
    if (computerChoice === userChoice) {
        result = 'its a draw!'
    }

    if (computerChoice === 'Rock <i class="fa-solid fa-hand-back-fist"></i>' && userChoice === 'Paper <i class="fa-solid fa-hand"></i>') {
        result = 'you win!'
    }

    if (computerChoice === 'Rock <i class="fa-solid fa-hand-back-fist"></i>' && userChoice === 'Scissors <i class="fa-solid fa-hand-scissors"></i>') {
        result = 'you lost!'
    }

    if (computerChoice === 'Paper <i class="fa-solid fa-hand"></i>' && userChoice === 'Scissors <i class="fa-solid fa-hand-scissors"></i>') {
        result = 'you win!'
    }

    if (computerChoice === 'Paper <i class="fa-solid fa-hand"></i>' && userChoice === 'Rock <i class="fa-solid fa-hand-back-fist"></i>') {
        result = 'you lost!'
    }

    if (computerChoice === 'Scissors <i class="fa-solid fa-hand-scissors"></i>' && userChoice === 'Rock <i class="fa-solid fa-hand-back-fist"></i>') {
        result = 'you win!'
    }

    if (computerChoice === 'Scissors <i class="fa-solid fa-hand-scissors"></i>' && userChoice === 'Paper <i class="fa-solid fa-hand"></i>') {
        result = 'you lost!'
    }

    resultDisplay.innerHTML = result
}