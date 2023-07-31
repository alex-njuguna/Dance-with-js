const buttonEl = document.getElementById("roll-button")

const diceEl = document.getElementById("dice")

const rollHistoryEl = document.getElementById("roll-history")

let historyList = []

function rollDice(){
    //gen a random number in range 1 - 6
    const rollResult = Math.floor(Math.random() * 6) + 1
    //assign a face to the number generated
    const diceFace = getDiceFace(rollResult)
    diceEl.innerHTML = diceFace
    historyList.push(rollResult)
    updateRollHistory()
}

function updateRollHistory(){
    rollHistoryEl.innerHTML = ""
    for (let i = 0; i<historyList.length; i++){
        //create a list element for history
        const listItem = document.createElement("li")
        // assign roll no and dice face to the list element
        listItem.innerHTML = `Roll ${i+1}: <span>${getDiceFace(historyList[i])}</span`
        // push to the unordered list
        rollHistoryEl.appendChild(listItem)
    }
}

function getDiceFace(rollResult){
    switch (rollResult){
        case 1:
            return "&#9856;"
        case 2:
            return "&#9857;"
        case 3:
            return "&#9858;"
        case 4:
            return "&#9859;"
        case 5:
            return "&#9860;"
        case 6:
            return "&#9861;"
        default:
            return ""
    }
}

buttonEl.addEventListener("click", () => {
    diceEl.classList.add("roll-animation")
    setTimeout(() => {
        diceEl.classList.remove("roll-animation")

        rollDice()
    }, 1000)
})