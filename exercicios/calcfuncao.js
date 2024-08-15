/**
* Calculadora utilizando função
* @author Joao Fonseca
* @author Andrew Dantas
*/

const input = require('readline-sync')
console.clear()

let num1, num2, operacao

num1 = Number(input.question("Digite o valor do 1 numero: "))
num2 = Number(input.question("Digite o valor do 2 numero: "))
console.log("")

console.log("1. Somar")
console.log("2. Subtrair")
console.log("3. Multiplicar")
console.log("4. Dividir")
console.log("5. Porcentagem")
console.log("")
operacao = Number(input.question("Digite a opcao desejada: "))

switch (operacao) {
    case 1:
        let somarAFS = (num1, num2) => console.log(`${num1} + ${num2} = ${num1 + num2}`)
        somarAFS(num1, num2)
        console.log("")
        break


    case 2:
        let SubtrairAFS = (num1, num2) => console.log(`${num1} - ${num2} = ${num1 - num2}`)
        SubtrairAFS(num1, num2)
        break
    
    case 3:
        let MultiplicarAFS = (num1, num2) => console.log(`${num1} x ${num2} = ${num1 * num2}`)
        MultiplicarAFS(num1, num2)
        break

    case 4:
        let DividirAFS = (num1, num2) => console.log(`${num1} / ${num2} = ${num1 / num2}`)
        DividirAFS(num1, num2)
        break

    case 5:
        let PorcentagemAFS = (num1, num2) => console.log(`${num1} % ${num2} = ${(num1 % num2) / 100}`)
        PorcentagemAFS(num1, num2)
        break
}


