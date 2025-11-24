let container = document.querySelector('.container')

let status = document.querySelector('.status')
let timer = document.querySelector('.timer')

let userInput = document.querySelector('.input')
let enterBtn = document.querySelector('.enter-btn')
let isClicked = false

let startBtn = document.querySelector('.start-btn')
let pauseBtn = document.querySelector('.pause-btn')
let resetBtn = document.querySelector('.reset-btn')

let totalSeconds
let startInterval
let removeInterval
let resetTimer

function setClickable(element) {
    if (isClicked) {
        element.style.pointerEvents = 'none'
        element.style.userSelect = 'none'
        element.classList.add('clicked')
    }
    else {
        element.style.pointerEvents = ''
        element.style.userSelect = ''
        element.classList.remove('clicked')
    }
}

function generateTimer() {
    if (!userInput.value || userInput.value < 0 || userInput.value == 0) { alert("Please enter a value") }
    else {
        totalSeconds = Number(userInput.value) * 60
        resetTimer = totalSeconds
        container.style.display = 'flex'
        renderTimer(totalSeconds)
        userInput.value = ''
    }
}

enterBtn.addEventListener('click', generateTimer)

startBtn.addEventListener('click', () => {
    clearInterval(startInterval)

    isClicked = true
    setClickable(startBtn)

    isClicked = false
    setClickable(pauseBtn)

    startInterval = setInterval(() => {
        if (totalSeconds > 0) {
            totalSeconds--
            renderTimer(totalSeconds)
        }
        else {
            clearInterval(startInterval)
            isClicked = false
            setClickable(startBtn)
            renderTimer(totalSeconds)            
        }
    }, 1000)
})

pauseBtn.addEventListener('click', () => {
    isClicked = false
    setClickable(startBtn)
    clearInterval(startInterval)
    renderTimer(totalSeconds)
})

resetBtn.addEventListener('click', () => {
    clearInterval(startInterval)
    renderTimer(resetTimer)
    isClicked = false
    setClickable(startBtn)

    isClicked = true
    setClickable(pauseBtn)
})

function renderTimer(Fseconds) {
    let minutes = Math.floor(Fseconds / 60)
    let seconds = Math.floor(Fseconds % 60)
    timer.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}