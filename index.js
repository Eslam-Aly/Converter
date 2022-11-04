
const oneMeter = 3.281
const oneFeet = 0.304
const oneliter = 0.264
const oneGallons = 3.785
const oneKilogram = 2.204
const onePounds = 0.453

const btn = document.getElementById("converter")
const length = document.getElementById("lengthValue")
const volume = document.getElementById("volumeValue")
const mass = document.getElementById("massValue")
const convetedNum = document.getElementById("numberToConvert")

btn.addEventListener("click", function(){
    length.innerHTML= `${convetedNum.value} meter = ${getResults(oneMeter)} feet 
    | ${convetedNum.value} feet = ${getResults(oneFeet)} meter`

    volume.innerHTML= `${convetedNum.value} liters = ${getResults(oneMeter)} gallons 
    | ${convetedNum.value} gallons = ${getResults(oneFeet)} liters`

    mass.innerHTML= `${convetedNum.value} kilos = ${getResults(oneMeter)} pounds 
    | ${convetedNum.value} pounds = ${getResults(oneFeet)} kilos`
})


function getResults(conversion){
    let finalResults = convetedNum.value * conversion
    return finalResults.toFixed(2)
}