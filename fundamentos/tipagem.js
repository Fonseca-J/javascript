/**
 * Estudos das variáveis - tipagem dinâmica
 * @author João Fonseca
 */

console.clear()
console.log("strings_________________________________________")
let nome = "João Fonseca"
console.log(typeof(nome))
console.log(nome)
//concatenação (unir um texo com o conteúdo de uma variável)
console.log("professor: " + nome) //evitar concatenar dessa forma
console.log(`professor: ${nome}`) // usar essa forma para cocatenar
console.log("números__________________________________________")
let peso = 96
let altura = 1.80
console.log(typeof(peso))
console.log(typeof(altura))
console.log(Number.isInteger(peso))
console.log(Number.isInteger(altura))
let imc = peso / (altura * altura)
console.log(`IMC: ${imc.toFixed(2)}`) //toFixed(2 arredondar para 2 casas decimais 
//ATENÇÃO//
console.log(10/0)
console.log("3" + 2)
console.log("3" - 2)
console.log("3" * 2)
console.log("3" / 2)
console.log("3x" -2)
console.log(0.5 + 0.5)
console.log(0.1 + 0.2)
console.log("booleanos_________________________________________")
let chave = true 
console.log(typeof(chave))
let lampada = false
console.log(typeof(lampada))
console.log(`Chave: ${chave} Lâmpada: ${lampada}`)






