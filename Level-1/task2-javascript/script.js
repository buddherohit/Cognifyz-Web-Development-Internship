
const button = document.getElementById("colorBtn")

button.addEventListener("click", function () {

    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16)

    document.body.style.backgroundColor = randomColor

})



const currentHour = new Date().getHours()

if (currentHour < 12) {
    alert("Good Morning! Hope you have a productive day.")
}
else if (currentHour < 18) {
    alert("Good Afternoon! Keep up the great work.")
}
else {
    alert("Good Evening! Time to relax and reflect.")
}




function calculateSum() {

    let num1 = Number(document.getElementById("firstNumber").value)
    let num2 = Number(document.getElementById("secondNumber").value)

    let total = num1 + num2

    document.getElementById("answer").innerText =
        "Total Sum: " + total

}