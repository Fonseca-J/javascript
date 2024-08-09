/**
* Jogo do Dado
* @author Joao Fonseca
*/

const input = require('readline-sync')

let face

console.clear()
console.log("Jogo do Dado")
input.question("Pressione a tecla [Enter] para jogar o dado: ")

//soreteio da face de um dado
//Math - clase matemática
//.floor (conversão para números inteiros)
//.random() * 6 (gerado)
face = Math.floor(Math.random() * 6)
console.log(`Face do dado:  ${face}`)

switch (face) {
    case 0:
        console.log("⚀")
        break
    case 1:
        console.log("⚁")
        break
    case 2:
        console.log("⚂")
        break
    case 3:
        console.log("⚃")
        break
    case 4:
        console.log("⚄")
        break
    case 5:
        console.log("⚅")
        break
}
