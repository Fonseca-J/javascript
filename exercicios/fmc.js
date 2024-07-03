/**
 * Cálculo Frequência máxima cardiaca
 * @author Joao Fonseca
 */


const input =   require('readline-sync')


//idade do homem = 39

//variáveis
let fmc, idade, media

//entrada
fmc = Number(input.question("Digite valor do fmc: "))
idade = Number(input.question("Digite o valor da idade: "))
media = Number(input.question("digite valor da média: "))

//processamento
fmc = (media * idade )
//saída
console.log(`Média: ${fmc.toFixed(2)}`)