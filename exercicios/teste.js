/**
 * Jogo de jankenpon
 * @author Andrew Dantas
 * @author João Fonseca
 */
 
const input = require('readline-sync')
const colors = require("colors")

let joke
pedra = 1
papel = 2
tesoura = 3

 
console.clear()
 
console.log("     ___  _______  __    _  ___   _  _______  __    _  _______  _______  __    _")
console.log("    |   ||   _   ||  |  | ||   | | ||       ||  |  | ||       ||       ||  |  | |")
console.log("    |   ||  |_|  ||   |_| ||   |_| ||    ___||   |_| ||    _  ||   _   ||   |_| |")
console.log("    |   ||       ||       ||      _||   |___ |       ||   |_| ||  | |  ||       |")
console.log(" ___|   ||       ||  _    ||     |_ |    ___||  _    ||    ___||  |_|  ||  _    |")
console.log("|       ||   _   || | |   ||    _  ||   |___ | | |   ||   |    |       || | |   |")
console.log("|_______||__| |__||_|  |__||___| |_||_______||_|  |__||___|    |_______||_|  |__|")
console.log("")
console.log("")
 
console.log("1. Pedra")
console.log("2. Papel")
console.log("3. Tesoura")
console.log("")
joke = Number(input.question("Digite a opcao desejada: "))
 
console.log("----------------------------------")
switch (joke) {
    case 1:
        console.log("Jogador escolheu Pedra")
        break
    case 2:
        console.log("Jogador escolheu Papel")
        break
    case 3:
        console.log("Jogador escolheu Tesoura")
        break
    default:
        console.log("Opção Inválida")  
}
joke = Math.floor(Math.random() * 3 + 1)
switch (joke) {
    case 1:
        console.log("Computador escolheu Pedra")
        break
    case 2:console.log("Computador escolheu Papel")
        break
    case 3:console.log("Computador escolheu Tesoura")
        break
}
if (joke = 1 && (joke = 2) && (joke = 3)) {
    console.log("EMPATE".yellow)
} else if (joke >= 2) {
    console.log("Perdeu" .red)    
} else {
    console.log("Venceu".green)
}

