const calculate = document.getElementById("calculate")

const total = document.getElementById("total")


calculate.addEventListener("click", () => {
    const bill = parseFloat(document.getElementById("bill").value)
    const tip = parseFloat(document.getElementById("tip").value)

    const totalBill = bill + ((tip / 100) * bill)

    total.innerHTML = totalBill.toFixed(2)
})