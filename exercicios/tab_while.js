/**
* Desenvolver app para calcular tabuada usando while 
* @author Joao Fonseca
*/

const input = require('readline-sync')
let x
let y = 1

console.clear()
console.log("Tabuada")
x = Number(input.question("digite o valor da Tabuada: "))
console.log("")


while (y < 11) {
    console.log(`${x} x ${y} = ${x * y}`)
    y++

}
