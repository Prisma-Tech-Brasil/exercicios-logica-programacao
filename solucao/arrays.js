// Crie um array com os nomes de 5 frutas e exiba cada uma no console usando um loop.

let frutas = ["banana", "maca", "pera", "melancia", "uva", "jaca", "manga", "caqui"]
for(let contador = 0; contador < frutas.length ;contador++){
    console.log(frutas[contador])
}

// Peça para o usuário inserir 5 números e armazene-os em um array. Depois, exiba a soma de todos os números.
let numeros = [4, 7, 3, 5, 10]
let soma = 0
for(let contador = 0; contador < numeros.length; contador++){
    soma += numeros[contador]
}
console.log(soma)

// Escreva um programa que encontre o maior número dentro de um array.
numeros = [1000, 22, 334, 45, 5, 6, 71]
let maior = 0

for(let contador = 0; contador < numeros.length; contador++){
    if(numeros[contador] > maior){
        maior = numeros[contador]
    }
    //console.log(contador, numeros[contador], maior)
}
console.log(maior)

