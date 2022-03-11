/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)*/
 
 
 
//Mansagem de boas vindas.
console.log("Boas vindas ao jogo Blackjack!");

 //Controle de repetição do jogo
let novoJogo;

do{

//Pergunta para começar o jogo
if (confirm("Quer iniciar uma nova rodada?")){ //true -> OK-> Começar o jogo

   //Sortear cartas
   const cartasUsuario = [comprarCarta(), comprarCarta()];
   const cartasComputador = [comprarCarta(), comprarCarta()];

   //Somando os pontos
   const pontosUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor
   const pontosComputados = cartasComputador[0].valor + cartasComputador[1].valor;

   //Mostrar cartas e pontos
   console.log(`Usuario - cartas ${cartasUsuario[0].texto} ${cartasUsuario[1].texto} - pontuação ${pontosUsuario}`);
   console.log(`Computador - cartas ${cartasComputador[0].texto} ${cartasComputador[1].texto} - pontuação ${pontosUsuario}`);

   // Resultado Final
   if(pontosUsuario > pontosComputados){ //Usuario -> Venceu
      console.log("O usuário ganhou!")

   }else if(pontosUsuario < pontosComputados){ //Usuario -> Perdeu
      console.log("O computador ganhou!")
      
   } else{ // Empate
      console.log("Empatou!")
    
}

novoJogo = true




} else{ //false -> CANCELAR -> Terminar o jogo
   console.log("O jogo acabou!")
   novoJogo = false

};
} while (novoJogo == true)