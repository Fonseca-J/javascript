/**
 * Cálculo do M² por tijolo / sabendo que o M² do tijolo 8 furos = 28 tijolos
 * @author Joao Fonseca
 */

const input = require('readline-sync')

let m2, tijolo

console.log("Calculo da quantidade de tijolos por m2/tijolo de 8 furos")

//entrada
m2= Number(input.question("Quantos metros quadrados voce precisa? "))

//processamento
tijolo = m2 * 28

//saida
console.log(`Voce precisa de ${tijolo} tijolos`)




