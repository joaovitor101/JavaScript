// CLASSE, DATA E MOEDA

// OBJETO LITERAL
const carro = {
  // ATRIBUTOS
  marca: "Ford",
  modelo: "Focus",
  ano: 2014,
  // MÉTODOS
  buzinar() {
    return "Beep! Beep!";
  },
};
console.log(carro.marca, carro.modelo);
console.log(carro.buzinar());

// CLASSE
class Carro {
  // ATRIBUTOS
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  // MÉTODOS
  buzinar() {
    return "Beep! Beep!";
  }
}

// Criando uma instância (objeto) da classe Carro
// const carroPopular = new Carro("Ford", "Focus", 2014)
const carroPopular = new Carro();
carroPopular.marca = "Fiat";
carroPopular.modelo = "Uno";
carroPopular.ano = 2012;

console.log(
  carroPopular.marca,
  carroPopular.modelo,
  carroPopular.ano,
  carroPopular.buzinar()
);

const carroEsportivo = new Carro("Chevrolet", "Camaro", "2024");

console.log(
  carroEsportivo.marca,
  carroEsportivo.modelo,
  carroEsportivo.ano,
  carroEsportivo.buzinar()
);

//////////////////////////////////////////////////////////////////////////////////////////////

// MANIPULANDO DATAS NO JAVASCRIPT
// Criando uma instância da classe Date no JS (para utilizar os seus métodos)
const dataAtual = new Date();

// PEGAR O DIA ATUAL
const dia = dataAtual.getDate();
console.log(`Hoje é dia ${dia}!`);

// PEGAR O MÊS ATUAL
const mês = dataAtual.getMonth() + 1;
console.log(`Estamos no mês ${mês}!`);

// PEGAR O ANO ATUAL
const ano = dataAtual.getFullYear();
console.log(`Estamos no ano ${ano}!`);

console.log(`Hoje é ${dia}/${mês}/${ano}.`);

//////////////////////////////////////////////////////////////////////////////////////////////
//MANIPULANDO MOEDAS NO JS

 let salario = 2500.30
 console.log(salario.toFixed(2));

 // .replace - altera o formato da casa decimal

 console.log(salario.toFixed(2).replace('.', ','));

 // .tolocaleString  - faz a formatação para determinada moeda

 console.log(salario.toLocaleString('pt-br', {style: 'currency', currency:'BRL'}));
 console.log(salario.toLocaleString('en', {style: 'currency', currency:'USD'}));
 console.log(salario.toLocaleString('en', {style: 'currency', currency:'EUR'}));




