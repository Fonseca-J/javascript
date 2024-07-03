/**
* Conversor de moedas (Real x Euro) 
* @author Joao Fonseca
*/

 const input = require('readline-sync')

 //variáveis
 let real, euro, total

 console.clear()
 console.log("Convesro Real x Euro")

//entrada
 real = Number(input.question("Digite total em reais a serem convertidos: "))
 euro = Number(input.question("Digite a cotação do euro: "))

 //processamento
 total = real / euro

 //saída
 console.log(`R$ ${real.toFixed(2)} equivalem = € ${total.toFixed(2)} euros`)



