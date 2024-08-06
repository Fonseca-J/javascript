/**
* Sistema de Votação
* @author Joao Fonseca
*/

const input = require('readline-sync')
const colors = require("colors")

let idade 

console.clear()
console.log("Permissão de Voto")
idade = Number(input.question("Digite a sua idade: "))

if (idade < 16) {
    console.log("PERMISSÃO A VOTO NEGADA".red)
} else if (idade >= 18 && idade < 71) {
    console.log("OBRIGATORIEDADE DO VOTO" .blue)
} else {
    console.log("Decisão facultativa".yellow)
}



