const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

const newYears = "1 Jan 2024"

function countDown(){
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()

    const totalSeconds = (newYearsDate - currentDate) / 1000

    const seconds = Math.floor(totalSeconds % 60)
    const minutes = Math.floor(totalSeconds / 60) % 60
    const hours = Math.floor(totalSeconds / 3600) % 24
    const days = Math.floor(totalSeconds / (60 * 60 * 24))

    /*const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const minutes = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60
*/

    daysEl.innerHTML = days
    hoursEl.innerHTML = formatTime(hours)
    minutesEl.innerHTML = formatTime(minutes)
    secondsEl.innerHTML = formatTime(seconds)
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time
}

countDown()

setInterval(countDown, 1000)