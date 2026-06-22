let scoreHome = 0
let scoreGuest = 0

function addHome(addition) {
    scoreHome += addition
    document.getElementById("punkte-home").textContent = scoreHome
}

function addGuest(addition) {
    scoreGuest += addition
    document.getElementById("punkte-guest").textContent = scoreGuest
}

function newGame() {
    scoreHome = 0
    document.getElementById("punkte-home").textContent = scoreHome
    scoreGuest = 0
    document.getElementById("punkte-guest").textContent = scoreGuest
}