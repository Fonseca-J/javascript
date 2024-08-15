/**
* função simples
* @author Joao Fonseca
*/

// função  simples
function hello() {
    console.log("Hello Function")
}
// para executar uma função basta escrever o nome dela seguido de parênteses
hello()
//console.log(typeof(hello))

// função atribuida (função anônima)
const hello2 = function() {
    console.log("Hello function atribuída")
}

//console.log(typeof(hello2))
hello2()

// função atribuida simplificada (arrow function)
const hello3 = () => {
    console.log("HEllo arrow fuction")
}

hello3()

// função atribuída simplificada(arrow function)1 linha de código
const hello4 = _ => console.log("Hello arrow function on line")

hello4()
