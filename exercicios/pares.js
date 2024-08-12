/**
* Escreva um codigo que use o laço for para contar quantos números pares existem de 1 a 20
* @author Joao Fonseca
*/


let pares = 0

for (let i = 1; i < 21; i++) {
    if (i % 2 === 0){
        pares++
    }
}
console.log(pares)