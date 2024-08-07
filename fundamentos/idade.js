/**
* Estudo da estrutura de cntrole if-else
* @author Joao Fonseca
*/

const input = require('readline-sync')

let idade

console.clear()
console.log("Estudo da estrutura if-else")
console.log("Validar maioridade")
idade = Number(input.question("Digite a sua idade: "))
// Uso da estrutura if-else para validar sua idade
if (idade < 18) {
    console.log("Menor de Idade")
} else {
    console.log("Maior de Idade")
}



