//EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO

// 1- 
/* A. Irá ser impresso no console Matheus Nachtergaele
                                 // Virginia Cavendish
                                 // {canal:'Globo',      horario:'14h'}
*/
                   

/* 2--------------------------------------------
   A. {nome: 'Juca', idade: 3, raca:'SRD'}
      {nome: 'Juba', idade: 3, raca:'SRD'}
      {nome: 'Jubo', idade: 3, raca:'SRD'}

   B. Ela basicamente copia o objeto, facilitando a alteração dele.
*/
                              

/* 3---------------------------------------------
   A. false
    undefined

    B. O undefined ocorre quando a variavel que está sendo avaliada não tem valor atribuido.



*/
//EXERCICIOS DE ESCRITA DE CÓDIGO

// 1-
//A.

const pessoa = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
 }

 pessoa.frase =['Amanda', 'Amandinha', 'Mandinha', 'Mandi']


 console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou  ${pessoa.apelidos[2]}.`);  
 
//B.----------------------------------------------------

 function criarNovosApelidos (apelidos1){
    const novosApelidos = {...apelidos1, criandoApelidos:['Mandoca', 'Ma', 'Maazinha']}

    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${novosApelidos.criandoApelidos[0]}, ${novosApelidos.criandoApelidos[1]}, ou ${novosApelidos.criandoApelidos[2]}`);
}

    criarNovosApelidos(pessoa);


    //2------------------------------------------------
    //A.

    const dadosPessoais = {
        nome: 'Helen',
        idade: 25,
        profissao: "Desenvolvedor"
        
    }
    const dadospessoais1 = {
        nome: 'Rafael',
        idade: 34,
        profissao: 'Engenheiro'
    }

    const retornaArray= (objeto)=>{
        const array =[objeto.nome, objeto.nome.length, objeto.idade, objeto.idade.length, objeto.profissao, objeto.profissao.length];
        return array

    }

    console.log(retornaArray(dadosPessoais))
    console.log(retornaArray(dadospessoais1))



 

// 3--------------------------------------------------------
//A.
    const carrinho=[]
//B.
    const fruta1={
        nome: 'Maça',
        disponibildade: true
    }
  
    const fruta2={
        ...fruta1,
        nome:'Banana'
    }

    const fruta3={
        ...fruta1,
        nome:'Maracuja'
    
    }
//C.
    function funcaoCarrinho(objeto){
        carrinho.push(objeto)
    }

//D.    
    funcaoCarrinho(fruta1);
    funcaoCarrinho(fruta2);
    funcaoCarrinho(fruta3);
    console.log(carrinho)
