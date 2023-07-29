const timeInMins =document.getElementById("time-input").value

const timerEl = document.getElementById("timer")
const startEl = document.getElementById("start")
const stopEl = document.getElementById("stop")
const resetEl = document.getElementById("reset")

let timeLeft = 0
// let time_holder = parseInt(timeInMins) * 60;
let interval;


function updateTimer(){
    let hours = Math.floor(timeLeft / 3600)
    let minutes = Math.floor((timeLeft / 60) - (hours * 60))
    let seconds = timeLeft % 60

    let formattedTime = `${String(hours).padStart(2, "0")}:
    ${String(minutes).padStart(2, "0")}:
    ${String(seconds).padStart(2, "0")}`;

    timerEl.innerHTML = formattedTime
}


startEl.addEventListener("click", function() {
    const timeInMins =document.getElementById("time-input").value
    if(timeInMins > 0){
        timeLeft = parseInt(timeInMins) * 60
        updateTimer()
    }
    else{
        timerEl.innerHTML = "Invalid value"
        return
    }
    
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft === 0) {
            clearInterval(interval);
            alert("Time's up");
            timeInMins = document.getElementById("time-input").value;
            timeLeft = parseInt(timeInMins) * 60;
            updateTimer();
        }
    }, 1000);
});

stopEl.addEventListener("click", function() {
    clearInterval(interval);
});

resetEl.addEventListener("click", function() {
    clearInterval(interval);
    timeInMins = document.getElementById("time-input").value;
    timeLeft = parseInt(timeInMins) * 60;
    updateTimer();
});