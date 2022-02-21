// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt('Digite a altura do retangulo'));
  const largura = Number(prompt('Digite a largura do triangulo'));
  
  const area = altura * largura;
 
  console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual1 = Number(prompt("Em que ano estamos?"));
  const anoNascimento = Number(prompt("Em que ano nasceu?"));
  
  const idade = anoAtual1 - anoNascimento

  console.log(idade);

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  let imc = peso/(altura**2)
  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
let  nomeUsuario  =  prompt( "Digite seu nome" ) ;
let idadeUsuario  = Number(prompt("Digite sua idade"))
let emailUsuario = prompt("Digite seu email");

console.log( `Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`);


}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
let cor1 = prompt("Você irá digitar 3 de suas cores favoritas, digite a primeira cor");
let cor2 = prompt("Digite sua segunda cor favorira");
let cor3 = prompt("Digite sua terceira cor favorita");

let coresFavoritas = [cor1, cor2, cor3];

console.log(coresFavoritas);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
const Positivo = custo/valorIngresso;
return Positivo

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  
  let comparacao = string1.length === string2.length
  return comparacao

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
return array[array.length -1];

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const elemento = array[0];
  array[0] = array[array.length -1];
  array[array.length -1] = elemento;

  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
 const saoiguais = string1.toLowerCase() === string2.toLowerCase()

 return saoiguais

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual2 = Number(prompt("Digite em que ano estamos"));
  const anoDeNascimento = Number(prompt("Digite o ano do seu nascimento"));
  const anoDaCarteira = Number(prompt("Digite a data da emissão da carteira de identidade"));

  const  idadeUsuario2 = anoAtual2 - anoDeNascimento
  const anosDeDiferenca = anoAtual2 - anoDaCarteira

  
   criteriosRenovacao = (idadeUsuario2 >= 20 && anosDeDiferenca <= 5);
   criteriosRenovacao2 = ((idadeUsuario2 >= 20 && idadeUsuario2 > 50) && anosDeDiferenca < 10);
   criterioRenovacao3 = (idadeUsuario2 > 50 && anosDeDiferenca < 15);
 
  console.log(criteriosRenovacao || criteriosRenovacao2 || criterioRenovacao3);

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}