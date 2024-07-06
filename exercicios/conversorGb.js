/**
* Conversor de Mb x Gb (Real x Euro) 
* @author Joao Fonseca
*/

const input = require('readline-sync')
const Gb = 1.024

//variável
let Mb

console.clear()
console.log("Convesor de Mb x Gb")

Mb = Number(input.question("Digite total Mb a serem convertidos: "))

total = Mb * Gb

console.log(`Mb ${Mb.toFixed(4)} equivalem = Gb ${total.toFixed(4)} Gb`)










