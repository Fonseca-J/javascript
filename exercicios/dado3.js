/**
* Jogo do Dado 3 (Exemplo de uso de uma função simples)
* @author Joao Fonseca
*/

const input = require('readline-sync')
const colors = require('colors')
let face
let confirma = "n"



function jogarDado() {
    console.clear()
    console.log("Jogo do Dado2")
    input.question("Pressione a tecla [Enter] para jogar o dado: ")
    face = Math.floor(Math.random() * 6 + 1)
    console.log(`Face do dado: ${face}`)
    
}

jogarDado()

confirma = input.question("Deseja jogar novamente (s/n): ")

if (confirma === "s") {
    jogarDado()
} else {
    console.log("GAME OVER" .red.bold)
}



