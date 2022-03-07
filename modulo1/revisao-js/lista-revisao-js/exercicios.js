// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let novoArray = []
    for (item of array) {
        novoArray.unshift(item);
    }
  return novoArray
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
return array.sort((a, b) => a - b);
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
var novoArray = [];
for (i=0; i<array.length; i++){
    if (array[i]%2===0){
        novoArray.push(array[i])
    }
}
   return novoArray;
   
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 let novoArray = [];
 let quadrados = [];
 for (let item of array){
     if (item %2 == 0 ){
         novoArray.push(item)
     };
  };

 for (let i = 0; i < novoArray.length; i++){
     quadrados[i] = novoArray[i] ** 2;
 };
 return quadrados;

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let numeroMaior = array[0];
  for (let i = 1; i < array.length; i++){
      if (array[i]> numeroMaior){
          numeroMaior = array[i];
      };
  };
  return numeroMaior
};

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let objeto  = {};
objeto.maiorNumero = Math.max(num1, num2);
objeto.maiorDivisivelPorMenor = Math.max(num1, num2) %
    Math.min(num1, num2) == 0;
    objeto.diferenca = Math.abs(num1-num2);
    return objeto;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let numerosPares = [];
   for (let i = 0; i < n; i++ ){
       numerosPares.push(i * 2);
   };
   return numerosPares
};

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if (ladoA == ladoB && ladoB == ladoC && ladoC == ladoA) {
    return "Equilátero";
}else if (ladoA != ladoB && ladoB != ladoC && ladoC != ladoA){
    return  "Escaleno";
}else{
    return "Isósceles";
     };
};

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let novoArray = array.sort((a, b) => a - b);
  return[novoArray[novoArray.length-2], novoArray[1]];
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const novaPessoa = {
       ...pessoa,
       nome: "ANÔNIMO"
   };
   return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   return pessoas.filter(item => item.altura >= 1.5 && item.idade > 14 && item.idade < 60)
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter(item => !(item.altura >= 1.5 && item.idade > 14 && item.idade < 60))
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
for (let nome of contas) {
    nome.saldoTotal -= nome.compras.reduce((soma, valor) => soma += valor, 0);
    nome.compras = []
    };
    return contas;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  const classificador = new Intl.Collator();
  consultas.sort((a, b) => classificador.compare(a.nome, b.nome));
  return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   function valorDaData(data) {
       const elementos = data.split('/');

       const novaData = new Date(elementos[2], elementos[1], elementos[0]);
       return novaData.getTime();
   };

      return consultas.sort((a, b) => valorDaData(a.dataDaConsulta) - valorDaData(b.dataDaConsulta));
 
   
}
