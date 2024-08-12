/**
* Escreva um código que some todos os números de 1 a 100 e exiba o resultado no console
* @author Joao Fonseca
*/

const input = require('readline-sync')
let soma = 0 
console.clear()



for (let i = 1; i < 101; i++) {
    soma += i
}
console.log(soma)

