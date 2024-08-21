const nome = "Jao"
var idade = 20;
idade = 10

let cidade 
cidade = "Registro"
console.log(nome);
console.log(idade);
console.log(cidade);

const sobrenome = "Max"
const salario = "1500"
let endereco
console.log(typeof(sobrenome));
console.log(typeof(salario));
console.log(typeof(endereco));


function minhaFuncao(){
    console.log("Olá, mundo!");
}

minhaFuncao()

function saudacao(cidade, nome = "usuário"){ //cidade obrigatório
    console.log("Olá, bem vindo, " + nome + " de " + cidade);
}

saudacao("Registro")

function soma (n1, n2){
    let resultado = n1 + n2
    console.log(`A soma é ${resultado}`);
}

soma(5, 5) //Virgula = divisão de parâmetros

//função com retorno

function Soma(n1, n2){
    return n1 + n2
}

console.log(`A dos dois números foi ${Soma(2,6)}.`);

//função com 2 retornos

function parImpar(n){
    if(n % 2 == 0){
        return 'é par'
    } else{
        return 'é impar'
    }
}

let n = 7
console.log(`O numero enviado é ${parImpar(n)}`);




