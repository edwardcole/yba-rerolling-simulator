let count = document.querySelector("#count")
let button = document.querySelector("#button")
let pity = document.querySelector("#chance")

let rolls = 0
let chance = 100
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
button.onclick = function() {
    let shiny = false
    rolls = 0
    chance = 100
    while(!shiny) {
        let rand = getRandomInt(10000)
        if(rand <= chance) {
            shiny = true
        } else {
            chance += 4
        }
        rolls += 1
        count.innerHTML = "Amount of rolls: "+rolls
        pity.innerHTML = "pity: "+chance/100+"%"
    }
}
