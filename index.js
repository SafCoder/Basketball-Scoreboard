let guestCount = 0 
let homeCount = 0

let homePoints = document.getElementById("count-el-1")
let guestPoints = document.getElementById("count-el-2")



function homeIncrementByOne() {
    homeCount += 1
    homePoints.textContent = homeCount;
}

function homeIncrementByTwo() {
    homeCount += 2
    homePoints.textContent = homeCount;
}

function homeIncrementByThree() {
      homeCount += 3
      homePoints.textContent = homeCount;
}


function guestIncrementByOne() {
    guestCount += 1
    guestPoints.textContent = guestCount;
}

function guestIncrementByTwo() {
    guestCount += 2
    guestPoints.textContent = guestCount;
}

function guestIncrementByThree() {
    guestCount += 3
    guestPoints.textContent = guestCount;
}


function newGame() {
    guestCount = 0
    homeCount = 0
    guestPoints.textContent = guestCount;
    homePoints.textContent = homeCount;
    
}