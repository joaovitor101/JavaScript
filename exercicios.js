//ex 1 - função simples
function infos() {
    console.log(`Olá, meu nome é João, sou de Registro e tenho 19 anos`);
}
infos();


//ex 2 - função com parâmetros
function div (n1, n2){
    let resultado = n1 / n2
    console.log(`A divisão é ${resultado}`);
}
div(5, 5)


//ex 3 - função com retorno
function mult (n1, n2, n3){
    let resultado = n1 * n2 * n3
    console.log(`A multiplicação é ${resultado}`);
}
mult(5, 5, 5)


//ex 4 função com mais de um retorno
function maiorIdade(n){
    if(n >= 18){
        return 'maior de idade'
    } else{
        return 'menor de idade'
    }
}

let n = 17
console.log(`${maiorIdade(n)}`);


//ex 5 - função anônima

const resultado = function(n1, n2){
    const media = (n1 + n2)/2

    if(media >= 5){
        return 'Aprovado'
    } else{
        return 'Reprovado'
    }
}
console.log(resultado(4,6))


//ex 6 - arrow function com parâmetro único


const triplo = (x) => {
    return x * 3
}
console.log(`O triplo do número é ${triplo(10)}.`)

//ex 7 - arrow function com mais de um parâmetro

const soma = (n1, n2, n3, n4) =>{
    return n1+n2+n3+n4
}

console.log(`A soma dos números é ${soma(1,2,3,4)}`)

//ex 8 - Função imediata    
const saudacao = (function(nome){
    console.log("Olá, boa noite " + nome)
})("Jao")






