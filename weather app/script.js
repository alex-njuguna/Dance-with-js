const apiKey = "fbc37cc8d018fedb73a2a060210a033b"

const weatherData = document.getElementById("weather-data")
const cityInputEl = document.getElementById("city-input")
const formEl = document.querySelector("form")

formEl.addEventListener("submit", (event) => {
    event.preventDefault()
    const cityInput = cityInputEl.value
    // console.log(cityInput)
    getWeatherDetails(cityInput)
})

async function getWeatherDetails(cityInput){
    try {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`

        const response = await fetch(url)
        data = await response.json()
        
        const icon = data.weather[0].icon
        const temperature = Math.round(data.main.temp)
        const description = data.weather[0].description

        const details = [
            `feels like: ${Math.round(data.main.feels_like)}°C`,
            `humidity: ${data.main.humidity}%`,
            `wind speed: ${data.wind.speed} m/s`
    ]
    weatherData.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather icon">`
    weatherData.querySelector(".temperature").innerHTML = `${temperature}°C`
    weatherData.querySelector(".description").innerHTML = description
 
    weatherData.querySelector(".details").innerHTML = details.map((detail) =>
        `<div>${detail}</div>`).join("")

    } catch (error) {
        weatherData.querySelector(".icon").innerHTML = ""
        weatherData.querySelector(".temperature").innerHTML = ""
        weatherData.querySelector(".description").innerHTML = "Sorry, no track of that area in our database"
 
        weatherData.querySelector(".details").innerHTML = ""
    }
}