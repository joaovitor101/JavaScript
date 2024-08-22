// let produtos = ["Computador", "Notebook", "Celular", "Tablet"]

// console.log(typeof(produtos));
// console.table(produtos);

// console.table(produtos[0]);
// console.table(produtos[1]);
// console.table(produtos[2]);
// console.table(produtos[3]);

// for(let c in produtos){
// console.table(`${c} - ${produtos[c]}`);

// console.log(`${Number(c)+1} - ${produtos[c]}`)
// }

produtos.forEach(function(produto, i){
    console.log(i+1, produto);
})

//MÉTODOS DE MANIPULAÇÃO DE VETORES

// let listaFrutas = ['Laranja', ' Maçã',' Banana']
// console.log(`Nosso vetor é o: ${listaFrutas}`);

//PUSH - INSERE UM NOVO ELEMENTO NO FINAL DA LISTA

// listaFrutas[3] = ' Morango' // Adicionando sem o PUSH
// console.log(`Nosso vetor é o: ${listaFrutas}`);
// listaFrutas.push(' Abacaxi')
// console.log(`Nosso vetor é o: ${listaFrutas}`);

//UNSHIFT - INSERE UM NOVO ELEMENTO NO INICIO DA LISTA

// listaFrutas[0] = 'Pera'
// console.log(`Nosso vetor é o: ${listaFrutas}`);
// listaFrutas.unshift('Laranja')
// console.log(`Nosso vetor é o: ${listaFrutas}`);

//LENGH - RETORNAR O NUMERO DE ELEMETNOS NO VETOR

// let numeros = [6,8,2,9,3]
// console.log(`O numero de elementos nesse vetor é: ${numeros.length}`);

//SORT - ORDENA O VETOR
// console.log(`O primeiro valor do vetor é ${numeros[0]}.`);
// console.log(`Nosso vetor ordenado é o ${numeros.sort()}.`);
// console.log(`O primeiro valor do vetor é ${numeros[0]}.`);

//OBJETOS LITERAIS (Atributos e Métodos)

// const carro = {
//     //Atributos (propriedades - características)
//     modelo: 'gol',
//     cor: 'vermelho',
//     //Métodos (funções - ações)
//     acelerar(){
//         console.log('Acelerando...')
//     },
//     frear(){
//         console.log('Freando...')
//     },
// };
// console.log(carro.modelo);
// console.log(carro.acelerar());

//OBJETO

// const product = {
//     nome: 'Computador',
//     marca: 'Lenovo',
//     preco: 3000,
//     desc: 'PC moderno mto bom'
// }

// console.log(`O ${product.nome} da marca ${product.marca} custa apenas ${product.preco}. ${product.desc}`);

//ARRAY DE OBJETOS

const productList = [
  {
    nome: "Computador",
    marca: "Intel",
    preco: 4000,
    desc: "PC moderno mto bom",
  },
  {
    nome: "Tablet",
    marca: "Dell",
    preco: 3500,
    desc: "Tablet moderno gigantesco mesmo",
  },
  {
    nome: "Celular",
    marca: "Apple",
    preco: 15000,
    desc: "Celular mto bom camera nice dms",
  },
];

console.log(productList);

productList.forEach(function(product){
    console.log(`Produto: ${product.nome}`);
    console.log(`Marca: ${product.marca}`);
    console.log(`Preço: ${product.preco}`);
    console.log(`Descrição: ${product.desc}`);
    console.log();
})