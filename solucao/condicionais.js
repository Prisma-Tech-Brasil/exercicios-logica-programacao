// Peça para o usuário inserir um número e verifique se ele é positivo, negativo ou zero.

let numero = -3

if(numero > 0){
    console.log("Positivo")
}else if(numero < 0){
    console.log("Negativo")
}else{
    console.log("Zero")
}

// Escreva um programa que determine se um número é par ou ímpar.

numero = 7
if(numero % 2 == 0){
    console.log("Par")
}else{
    console.log("Impar")
}

// Faça um programa que receba a idade de uma pessoa e diga se ela pode votar (idade mínima: 16 anos).
let idade = 17

if(idade >= 18){
    console.log("Voce tem que votar")
}else if(idade >= 16){
    console.log("Voce pode votar")
}else{
    console.log("Voce nao pode votar")
}