/**
* Exercícios de fixação de conceitos de POO
/ Agência
* @author Joao Fonseca
*/

const input = require("colors")

// classe modelo
class Conta {
    // atributos encapsulados
    constructor(numero, titular, saldo) {
        this._numero = numero
        this._titular = titular
        this._saldo = saldo
    }

    getNumero() {
        return this._numero
    }
    getTitular() {
        return this._titular
    }
    getSaldo() {
        return this._saldo
    }
    exibirSaldo() {
        console.log(`O Saldo da conta de ${this.getTitular()} é R$ ${this.getSaldo().toFixed(2)}`)
    }
    depositar(valor) {
        this._saldo += valor
        console.log(`Credito de R$ ${valor.toFixed(2)}`.green)
    }
    sacar(valor) {
        if (valor > this._saldo) {
            console.log(` * Débito de R$ ${valor.toFixed(2)}`.red)
            console.log("Operação negada. Saldo Insuficiente.".red.bold)

        } else {
            (this._saldo -= valor)
            console.log(`Débito de R$ ${valor.toFixed(2)}`.red)
        }
    }
    pix(valor, destino) {
        if (valor > this._saldo) {
            console.log(` PIX de R$ ${valor.toFixed(2)} não realizado. Saldo Insuficiente.`.red)
        } else {
            this._saldo -= valor
            destino.depositar(valor)
            console.log(` # PIX de  R$ ${valor.toFixed(2)} para ${destino.getTitular()} realizado com  sucesso.`.red.bold)
        }
    }
}

class ContaPoupanca extends Conta {
    //atributos
    constructor(numero, titular, saldo) {
        super(numero, titular, saldo)
    }
    //método
    exibirSaldoPoupanca() {
        console.log(`O Saldo da conta poupanca de ${this.getTitular()} é R$ ${this.getSaldo().toFixed(2)}`)
    }
}


console.clear()
console.log("BANCO".blue)
console.log(" ______  ___   _   _ _____ _____   _____ _____ ___  _   _ ")
console.log("| ___ \\/ _ \\ | \\ | /  __ \\  _  | |_   _|_   _/ _ \\| | | |")
console.log("| |_/ / /_\\ \|  \\| | /  \\/ | | |   | |   | |/ /_\\ \\ | | |")
console.log("| ___ \\  _  || . ` | |   | | | |   | |   | ||  _  | | | |")
console.log("| |_/ / | | || |\  | \\__/\ \\_/ /  _| |_  | || | | | |_| |")
console.log("\____/\\_| |_/\\_| \\_/\\____/\\___/   \\___/  \\_/\\_| |_/\\___/ ")



let cc1 = new Conta(1, "Robson  Vaamonde", 3000)
console.log(`Cliente: ${cc1.getTitular()} | conta: ${cc1.getNumero()}`.green.bold)
cc1.exibirSaldo()
cc1.depositar(1000)
cc1.exibirSaldo()
cc1.sacar(150)
cc1.exibirSaldo()
console.log("")

let cc2 = new Conta(2, "Leandro Ramos", 2000)
console.log(`Cliente: ${cc2.getTitular()} | conta: ${cc1.getNumero()}`.blue.bold)
cc2.exibirSaldo()
cc2.depositar(4000)
cc2.exibirSaldo()
cc2.sacar(1000)
cc2.exibirSaldo()
console.log("")

let cc3 = new Conta(3, "Sirlene Sanches", 2000)
console.log(`Cliente: ${cc3.getTitular()} | conta: ${cc1.getNumero()}`.magenta.bold)
cc3.exibirSaldo()
cc3.depositar(2000)
cc3.exibirSaldo()
cc3.sacar(8000)
cc3.exibirSaldo()
cc3.sacar(10000)
cc3.exibirSaldo()
cc3.pix(500, cc2)
cc3.exibirSaldo()
cc2.exibirSaldo()

console.log("____________________________________________________________________")
let cp1 = new ContaPoupanca(10, "Robson Vaamonde", 1000)
console.log(`Cliente: ${cp1.getTitular()} | conta: ${cp1.getNumero()}`.yellow.bold)
cp1.exibirSaldoPoupanca()