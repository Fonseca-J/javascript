/**
* Jogo do Dado 2
* @author Joao Fonseca
*/

const input = require('readline-sync')
let face
let confirma = "n"



do {
    console.clear()
    console.log("Jogo do Dado2")
    input.question("Pressione a tecla [Enter] para jogar o dado: ")
    face = Math.floor(Math.random() * 6 + 1)
    console.log(`Face do dado: ${face}`)
    confirma = input.question("Deseja jogar novamente(s/n): ")
} while (confirma === "s");






