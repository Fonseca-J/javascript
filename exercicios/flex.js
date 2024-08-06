/**
* JS - AULA 05: CALCULADORA FLEXS
* @author João Fonseca
*/

const colors = require('colors')
const input = require('readline-sync')

let etanol,gasolina;

console.clear()
console.log("Etanol ou Gasolina")

etanol = Number (input.question("Digite o valor do Etanol: "))
gasolina = Number (input.question("Digite o valor da Gasolina: "))

if (etanol < 0.7 * gasolina) {
    console.log("Abasteça com Etanol ".green)
}else{
    console.log("Abasteça com Gasolina ".blue)

}