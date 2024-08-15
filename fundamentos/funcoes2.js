/**
* Estudo das funções em JS
* Funções com parâmetros
* @author Joao Fonseca
*/

//IMPORTANTE !!! Funções atribuidas obrigatoriamente precisam ser criadas no inicio do código (antes de serem executadas)

// função literal com parâmetros
function somar(num1, num2){
    return (console.log(num1 + num2))
}

somar(2, 5)

// função atribuida (função anônima) com parâmetros
let somarAtribuida = function (num1, num2) {
    return (console.log(num1 + num2))
}

somarAtribuida(4, 9)

// função atribuida simplificada (arrow function) com parâmetros
let somarAF = (num1, num2) => {
    return(console.log(num1 + num2))
}

somarAF(2, 2)

// função atribuída simplificada(arrow function) com parâmetros 1 linha de código (neste caso o return é implicito)

let somarAFS = (num1, num2) => console.log(num1 + num2)

somarAFS(3, 3)
