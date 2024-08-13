/**
* Calcular volume de um aquário 
* @author Joao Fonseca
*/

const input = require('readline-sync')

let sorteio

console.clear()

input.question("Pressione [Enter] para sortear um numero ")

sorteio = Math.floor(Math.random() * 16 + 1)
console.log(sorteio)
