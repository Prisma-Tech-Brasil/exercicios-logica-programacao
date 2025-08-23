// Crie um objeto representando uma pessoa com nome, idade e profissão. Exiba essas informações no console.

let pessoa = {
    nome: "Danilo",
    idade: 24,
    profissao: "Educador"
}

console.log(pessoa)
console.log(pessoa.idade)

// Escreva um programa que receba um array de objetos representando produtos (nome e preço) e retorne o produto mais caro.

let produto1 = {
    nome:"Televisao",
    preco:2000
}

// Podemos colocar tanto valores direto quando variaveis
let listaProdutos = [produto1,{nome:"Celular",preco: 1500},{nome:"Carro", preco: 80000}]

// Para organizacao podemos quebrar linhas
let produtos = [
    {
        nome:"Celular",
        preco: 1500
    },
    {
        nome:"Carro", 
        preco: 80000
    },
    {
        nome:"Computador",
        preco:4000
    }

]

let valor = produtos[0].preco // Valor do primeiro elemento
let maiscaro = 0 // Posicao do primeiro elemento

// Verifica todas as posicoes do vetor
for(pos = 0; pos < produtos.length; pos++){ 
    // Se o preco daquele elemento for maior do que o maior valor visto 
    if(produtos[pos].preco > valor){ 
        // Atualiza os valores do maior preco e em qual posicao ele está 
        valor = produtos[pos].preco 
        maiscaro = pos
    }
}

// Imprime o produto na posicao que foi determinada
console.log(produtos[maiscaro])

// Crie um sistema simples de carrinho de compras com um array de objetos (produto e quantidade). Calcule o total da compra.

let carrinho = [
    {
        produto:{
            nome: "maça",
            preco: 2
        },
        quantidade: 4
    },
    {
        produto:{
            nome:"Pera",
            preco:10
        },
        quantidade: 2
    },
    {
        produto:{
            nome: "Banana",
            preco: 3
        },
        quantidade: 3
    }
]

let total = 0;
for(i = 0; i < carrinho.length; i++){
    console.log("produto: ",carrinho[i].produto, "quantidade", carrinho[i].quantidade, "custo:", carrinho[i].produto.preco * carrinho[i].quantidade)
    total += carrinho[i].produto.preco * carrinho[i].quantidade
}
console.log("Preco total: " + total)