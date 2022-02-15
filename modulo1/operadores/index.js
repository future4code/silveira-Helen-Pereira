/* Exercicios de interpretação de código*/

/*1- a. false
   b. false
   c. true
   d. boolean*/



 

//2- O erro está no prompt, pois ele só recebe string. Então a solução é colocar o Number antes do prompt. Deve ficar assim:

//3-

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))
let resultado = 0

const numeros = primeiroNumero + segundoNumero

console.log("somaNumero", numeros)


//Exercicio escrita de código
//1-

 //a.
  const idade = Number(prompt("Qual sua idade?"));

 //b.
  const idadeDoAmigo = Number(prompt("Qual a idade do seu melhor amigo ou da sua melhor amiga?"));

 //c.
  const soma = idade - idadeDoAmigo;
 console.log("A idade do meu amigo é maior que a minha:", idade > idadeDoAmigo)

 //d. 
 console.log("Diferença de Idade", idade - idadeDoAmigo);
 
//2-
//a.
const numeroPar = Number(prompt("Digite um numero par:"))

//b.
resultado = numeroPar % 2

//c.
console.log("Resultado da divisão", resultado);

//d. Aparece o numero que sobra.

//3-

let idadeemAnos = Number(prompt("Qual sua idade?"));
const meses = 12
const dias = 365
const horas = 24 
let idadeMeses = meses * idadeemAnos
let idadeDias = idadeemAnos * dias 
let idadeHoras = horas * dias * idadeemAnos

console.log("Sua idade é de", idadeemAnos, "anos");
console.log("Sua idade em meses é", idadeMeses, "meses");
console.log("Sua idade em dias é de aproximadamente", idadeDias, "dias");
console.log("Sua idade em horas é de aproximadamente", idadeHoras, "horas");


//4
let  n1 = Number(prompt("Digite um numero"))
let  n2 = Number(prompt("Digite outro numero"));


 resultado = n1 > n2
 console.log("O primeiro numero é maior que o segundo?", resultado);

 resultado = n1 === n2
 console.log("O primeiro numero é igual ao segundo?", resultado);

 resultado = n1 % n2 === 0
 console.log("O primeiro numero é divisível pelo segundo?", resultado);

 resultado = n2 % n1 ===0
 console.log("O segundo numero é divisível pelo primeiro?", resultado);

 
 
 





  