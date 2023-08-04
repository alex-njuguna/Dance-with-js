const btnEl = document.getElementById("calculate-age")
const pEl = document.getElementById("result")

btnEl.addEventListener("click", () => {
    const birthday = document.getElementById("birthday").value
    const currentDate = new Date()
    
    if(birthday == ""){
        alert("Enter a valid value for birthday")
    }
    else{
        const birthdayYear = new Date(birthday)
        let age = currentDate.getFullYear() - birthdayYear.getFullYear() 

        const month = currentDate.getMonth() - birthdayYear.getMonth()
        if(month < 0 || (month ===0 && currentDate.getDate() < birthdayYear.getDate())){
            age--
        }
    
        pEl.innerHTML = `Your age is: ${age} years old`
    }
})