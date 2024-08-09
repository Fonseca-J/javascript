/**
* Exemplo do uso da estrutura do Switch Case 
* @author Joao Fonseca
*/

const input = require('readline-sync')

let opcao

console.clear()

console.log("Boot escolha o sistema operacional")
console.log("1. Windows")
console.log("2. Linux")
opcao = Number(input.question("Digite a opcao desejad: "))
switch (opcao) {
    case 1:
        console.clear()
        console.log("Carregando o Windows........................")
        break
    case 2:
        console.clear()
        console.log("Carregando o Linux .....")
        break
    default:
        console.log("Opção inválida")
}       
