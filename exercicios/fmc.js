/**
 * Cálculo Frequência máxima cardiaca
 * @author Joao Fonseca
 */



//idade do homem = 39

const input = require('readline-sync')
const bpm = 208
const media = 0.70


//variaveis
let idade, fmc

console.clear()
console.log("Calculo da frequência máxima cardiaca")

//entrada
idade = Number(input.question("digite a sua idade: "))

//processamento
fmc = bpm - (media * idade)

//saida
console.log(`valor da frequencia máxima cardiaca ${fmc.toFixed(2)}`)


