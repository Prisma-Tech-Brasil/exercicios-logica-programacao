// Escreva um programa que gere um número aleatório entre 1 e 10 e peça para o usuário adivinhar. Informe se ele acertou ou não.

let escolha = 4
let aleatorio = Math.floor(Math.random() * 10) + 1
if(escolha == aleatorio){
    console.log("Parabens, você acertou")
}else{
    console.log("Voce Errou, o numero era " + aleatorio)
}

// Crie um programa que inverta uma string digitada pelo usuário (exemplo: "JavaScript" → "tpircSavaJ").

let palavra = "JavaScript"
let invertida = ""

for(i = palavra.length - 1; i >= 0; i--){
    invertida += palavra[i]
}

console.log(invertida)

// Escreva um programa que receba uma frase e conte quantas vogais ela tem.

let frase = "essa frase tem muitas palavras"
let vogais = ["a", "e", "i", "o", "u"]

let quantidade = 0
for(i = 0; i < frase.length; i++){
    for(j = 0; j < vogais.length; j++){
        if(frase[i] == vogais[j]){
            quantidade++;
        }
    }
}

console.log(quantidade)