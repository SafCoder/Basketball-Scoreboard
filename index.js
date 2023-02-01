let awayCount = 0 
let homeCount = 0

let homePoints = document.getElementById("count-el-1")
let awayPoints = document.getElementById("count-el-2")



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


function awayIncrementByOne() {
    awayCount += 1
    awayPoints.textContent = awayCount;
}

function awayIncrementByTwo() {
    awayCount += 2
    awayPoints.textContent = awayCount;
}

function awayIncrementByThree() {
    awayCount += 3
    awayPoints.textContent = awayCount;
}


function newGame() {
    awayCount = 0
    homeCount = 0
    awayPoints.textContent = awayCount;
    homePoints.textContent = homeCount;
    
}