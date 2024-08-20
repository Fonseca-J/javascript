/**
* POO - Atividade 4 (carros) 
* @author Joao Fonseca
*/

// Classe modelo (abstração)
class Carro {
    //atributos
    constructor(nome, ano, cor) {
        this.nome = nome
        this.ano = ano
        this.cor = cor

    }

//métodos
ligar() {
    console.log("------------------------------------")
    console.log(`Nome do carro ${this.nome}`)
    console.log(`Tempo do ${this.ano}`)
    console.log(`Aparncia: ${this.cor}`)
}
desligar() {
    console.log(`Tempo do ${this.ano} colocado`)

}
acelerar() {
    console.log("VRUUUUUMMMMM")
}

const cor = new Carro(1, "verde")
const cor = new Carro(2, "azul")
const cor = new Carro(1, "vermelho")

carro.ligar()


}
