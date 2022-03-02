/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

//Mensagem de boas vindas
alert(`Boas vindas ao jogo de Blackjack!`);

//Controle repetição
let novoJogo;
do{

//Iniciar o jogo
if (confirm(`Quer iniciar uma nova rodada?`)){ // OK -> true -> Iniciar o jogo
  
   //Declarando variaveis
   let cartasUsuario, cartasComputador;

   //Soteio cartas
   //Verificar repetições do ás
   do {
      cartasUsuario = [comprarCarta1(), comprarCarta1()]
       cartasComputador = [comprarCarta1(), comprarCarta1()];
   } while(somarCartas(cartasUsuario) == 22 || somarCartas(cartasComputador) == 22);

   //Exibir mensagem
   //Usuario comprar mais cartas
   while (somarCartas(cartasUsuario) <= 21){
      if(confirm(`Suas cartas são ${exibirCartas(cartasUsuario)}.\nA carta revelada do computador é ${cartasComputador[0].texto}.\nDeseja comprar mais uma carta?`)){ // Ok - comprar mais cartas

         cartasUsuario.push(comprarCarta1())

   } else { // cancelar - parar de comprar

      break;
   };
   
};

//Computador comprar mais cartas
while (somarCartas(cartasUsuario) <= 21 && somarCartas(cartasComputador) <= somarCartas(cartasUsuario)){
   cartasComputador.push(comprarCarta1())
};

//Resultado
if (somarCartas(cartasUsuario) > somarCartas(cartasComputador) && somarCartas(cartasUsuario) <= 21 || somarCartas(cartasComputador) > 21) { //Usuário ganhou

   alert(`Suas cartas são ${exibirCartas(cartasUsuario)}.\nSua pontuação é ${somarCartas(cartasUsuario)}.\nAs cartas do computador são ${exibirCartas(cartasComputador)}. A pontuação do computador é ${somarCartas(cartasComputador)}.\nO usuário ganhou`)

  

}else if (somarCartas(cartasUsuario) < somarCartas(cartasComputador) && somarCartas(cartasComputador) <= 21 || somarCartas(cartasUsuario) > 21){ // Computador ganhou

   alert(`Suas cartas são ${exibirCartas(cartasUsuario)}.\nSua pontuação é ${somarCartas(cartasUsuario)}.\nAs cartas do computador são ${exibirCartas(cartasComputador)}. A pontuação do computador é ${somarCartas(cartasComputador)}.\nO computador ganhou`)


}else{ //Empatou

   alert(`Suas cartas são ${exibirCartas(cartasUsuario)}.\nSua pontuação é ${somarCartas(cartasUsuario)}.\nAs cartas do computador são ${exibirCartas(cartasComputador)}. A pontuação do computador é ${somarCartas(cartasComputador)}.\nO Empatou!`)

}

novoJogo = true


}else{ //Cancelar -> false -> Terminar o jogo

   alert(`O jogo terminou!`)
   novoJogo = false

};

}while(novoJogo == true)

//Função para somar cartas

function somarCartas(cartas){
   return cartas.reduce((soma, item) => soma += item.valor, 0);
};

// Função para exibir cartas
function exibirCartas(cartas){
   return cartas.reduce((soma, item) => soma += item.texto + ' ', '').slice(0,-1);
}
