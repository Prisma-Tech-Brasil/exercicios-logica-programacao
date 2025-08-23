// Escreva uma função que receba dois números como parâmetros e retorne a soma deles.
function somanumeros(numero1, numero2){
    return numero1 + numero2
}

let soma = somanumeros(10, 20)
console.log(soma)



// Crie uma função que receba um nome como parâmetro e retorne uma saudação personalizada.
function saudacao(nome){
    return "Olá " + nome + ", tudo bem?"
}

// let texto = saudacao("danilo")
// console.log(texto)
console.log(saudacao("Danilo"))

// Escreva uma função que determine se um número é primo ou não.
function verificaPrimo(numero){
    let primo = true
    let div = numero - 1

    while(div > 1){
        if(numero % div == 0){
            primo = false
        }
        div--
    }

    return primo
}

console.log("10 " + verificaPrimo(10))
console.log("13 " + verificaPrimo(13))

