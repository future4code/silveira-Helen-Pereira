
  //EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO
  //1-
  //A.Será impresso no console, todos os nomes e apelidos dos usuarios, o array inteiro.

  //2-
  //A. Será impresso no console somente os nomes dos usuarios.


  //3-
  //A. Será impresso no console somente os que for diferente de "Chijo".


  //EXERCICIO ESCRITA DE CÓDIGO
//1-
  const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 //A.
    const nomeDosDoguinhos = pets.map(item => item.nome)
    console.log(nomeDosDoguinhos)

 //B.
    const racaSalsicha = pets.filter(item => item.raca == 'Salsicha');
    console.log(racaSalsicha)

  //C.
      const mensagemDoDesconto = pets.filter(item => item.raca == 'Poodle').map(item => `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`)
      console.log(mensagemDoDesconto)   

//2-
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
//A.
 const nomeProdutos = produtos.map(item => item.nome)
 console.log(nomeProdutos)

 //B. 
 const precoComDesconto = produtos.map(item => {
    return { nome: item.nome, preco: (item.preco * (1-0.05)). toFixed(2)}
 })
   console.log(precoComDesconto)

//C.
  const listaBebidas = produtos.filter(item => item.categoria == 'Bebidas').map(item => item.nome);
  console.log(listaBebidas)

//D.
  const produtosYpe = produtos.filter(item => item.nome.includes('Ypê'));
  console.log(produtosYpe)

//E. 
const mensagemYpe = produtosYpe.map(item => `Compre ${item.nome} por R$ ${item.preco.toFixed(2).replace('.', ',')}`)
console.log(mensagemYpe)


//DESAFIOS

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },]

//A.
const nomePokemons = pokemons.map(item => item.nome).sort();
console.log(nomePokemons)

//B.
const listaTipos = pokemons.map(item => item.tipo).filter((item, indice) => pokemons.map(item => item.tipo).indexOf(item) == indice);
console.log(listaTipos)