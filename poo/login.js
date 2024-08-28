/**
* POO - Fundamentos da programação orientada a objetos 
* Encapsulamento
* @author Joao Fonseca
*/

class Usuarios {
    //atributos
    constructor(login, senha) {
        this.login = login // atributo público
        //----------------------------------------------------------
        let _senha = senha // atributo privado(encapsulamento)
        //método para obter a senha (get)
        this.getSenha = () => _senha
        //método para modificar a senhaq (set)
        this.setSenha = (novaSenha) => _senha = novaSenha 
        //----------------------------------------------------------
    }
    //método
    logar() {
        console.log(`Usuário: ${this.login}`)
        console.log(`Senha: ${this.getSenha()}`)
        if (this.login === "admin" && this.getSenha() === "123@senac") {
            console.log("USUÁRIO AUTENTICADO")
        } else {
            console.log("Usuário ou senha inválido")
        }
    }
}

// Sistema
console.clear()
// criar um novo usuário
const user1 = new Usuarios("admin", "123456")
user1.logar()
user1.setSenha("123@senac") // setar a senha do usuário
user1.logar()