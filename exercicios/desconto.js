/**
 * Cálculo do valor do desconto 
 * @author Joao Fonseca
 */



//variáveis
let total, desconto, valor, totalDesconto

const input = require('readline-sync')

console.clear()
console.log('Cálculo do valor do desconto:')

//entrada
desconto = Number(input.question("Digite o valor do desconto em %: "))
total = Number(input.question("Digite o valor total: "))


//processamento 1
valor = (desconto * total) / 100

//saída1
console.log(`Valor total: R$ ${total.toFixed(2)}`)
console.log(`Desconto: ${desconto}%`)
console.log(`Valor do Desconto: R$ ${valor.toFixed(2)}`)

//processamento 2
totalDesconto = total - valor

//saída 2
console.log(`Total com desconto: R$ ${totalDesconto.toFixed(2)}`)


