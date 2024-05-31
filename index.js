/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

/**********declaring variables*********************/
const displayEl = document.getElementById("display-el")
const btnConvert = document.getElementById("btn-convert")
const descEl1 = document.getElementById("desc-el1")
const descEl2 = document.getElementById("desc-el2")
const descEl3 = document.getElementById("desc-el3")
let displayValue = null

/***********Adding event listner to button****************/
btnConvert.addEventListener("click", function(){
    displayValue = displayEl.value
    display(displayValue)
   
})

/************Fuction to display and convert values********************/
function display(value) {
    descEl1.innerHTML = `${value} meters = ${(value * 3.281).toFixed(3)}feet | ${value}feet = ${(value/3.281).toFixed(3)} meters`
    descEl2.innerHTML = `${value} liters = ${(value * 0.264).toFixed(3)}gallons | ${value}gallons = ${(value/3.281).toFixed(3)} liters`
    descEl3.innerHTML = `${value} kilos = ${(value * 3.281).toFixed(3)}pounds | ${value}pounds = ${(value/3.281).toFixed(3)} kilos`

}