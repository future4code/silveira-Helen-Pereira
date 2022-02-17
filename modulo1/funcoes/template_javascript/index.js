//EXERCICIO INTERPRETAÇÃO DE CÓDIGO

/* 1--------------------------------------------------

A. Irá sem impresso no console 10 
                               50
B. Não seria impresso no console, pois o console.log é o responsavel por essa função. 

2--------------------------------------------------------

A. Essa função serve para encontrar um conjunto de caracteres dentro de outra string, retornando false ou true.

B. Irá retornar todas true. Pois 

 */


//EXERCICIO DE ESCRITA DE CÓDIGO

//EXERCICIO 1-------------------------------------------
 //a.

 const sobreMim = function(){
   console.log(`Eu sou HELEN, tenho 25 anos, moro em ASSIS e sou estudante.`);

}
sobreMim(); 

//b

const sobreMim2 = function(nome, idade, cidade, profissão){
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}.`);
}

sobreMim2('Helen', 25, 'Assis', 'Estudante');


//EXERCICIO 2---------------------------------------------------------------

//a.
 function somar(a, b){
      let soma;
      soma = a + b;
      return soma;
 }

let resultado = somar(2,3);
console.log(resultado);

//b

function comparacao(a, b){
   return a >= b
}

console.log(comparacao(5,4));

//c

function verificaPar(numero) {
    const teste = (numero % 2) == 0;
    return teste;

};

console.log(verificaPar(57));

//d

function testeTexto(frase) {
    const tamanho = frase.length
    const fraseNova = frase.toUpperCase()
    console.log(tamanho, fraseNova);
}

testeTexto('Hoje é quinta-feira');

//EXERCICIO 3--------------------------------------------------------

function somar(a, b){
    return a + b;
}

function subtracao(a, b){
    return a - b;
}

function multiplicacao(a, b){
    return a * b;
}

function divisao(a, b){
    return a / b;
}

let numeros = [];
numeros[0] = Number(prompt("Digite 1o. num:"));
numeros[1] = +prompt("Digite 2o. num:");

let r1 = somar(numeros[0], numeros[1]);
let r2 = subtracao(numeros[0], numeros[1]);
let r3 = multiplicacao(numeros[0], numeros[1]);
let r4 = divisao(numeros[0], numeros[1]);

console.log(`Numeros ${numeros[0]} e ${numeros[1]} 
${r1}
${r2}
${r3}
${r4}`)






