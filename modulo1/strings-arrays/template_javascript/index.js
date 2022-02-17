/* EXERCICIOS DE INTERPRETAÇÃO 

//EXERCICIO 1 

a. undefined 

b. null

c. 11

d. 3

e. uma lista com 11

f. 9
     
EXERCICIO 2

Irá trocar todos os A pelos I na frase escrita, e irá contar os caracteres. "Subi num ônibus em Marrocos" contando com as aspas, 29.

*///-----------------------------------------------------------------------

//EXERCICIO ESCRITA DE CÓDIGO --------------------------------------------------


//EXERCICIO 1-

const nome = prompt("Qual seu nome?");
const email = prompt("Digite seu e-mail");

const fraseTemplanteString = `O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`

console.log(fraseTemplanteString);



//EXERCICIO 2 ----------------------------------------------------------------

const listaComidaPreferidas=['Sushi', 'Churrasco', 'Macarrão', 'Hotdog', 'Salada'];
//                            0          1           2            3        4

const minhaLista = ("Essas são as minhas comidas preferidas:")


console.log(listaComidaPreferidas);
console.log(minhaLista)
console.log(listaComidaPreferidas[0])
console.log(listaComidaPreferidas[1])
console.log(listaComidaPreferidas[2])
console.log(listaComidaPreferidas[3])
console.log(listaComidaPreferidas[4])

const comidaPreferidaUsuario = prompt("Qual sua comida preferida?")
 const comidaPreferida = `'Sushi', ${comidaPreferidaUsuario}, 'Macarrão', 'Hotdog', 'Salada'`
 console.log(comidaPreferida)

 
 
 //EXERCICIO 3---------------------------------------------------------------------
 
 let listaDeTarefas=[]
 
 const tarefa1 = prompt("Vamos listar 3 tarefas. Qual sua primeira tarefa?"); listaDeTarefas.push(tarefa1);
 const tarefa2 = prompt("Qual sua segunda tarefa?"); listaDeTarefas.push(tarefa2);
 const tarefa3 = prompt("Qual sua terceira tarefa?"); listaDeTarefas.push(tarefa3);
 
 console.log(listaDeTarefas)

 const tarefaConcluida = Number(prompt('Qual tarefa você terminou? 0, 1 ou 2?'));
listaDeTarefas.splice(tarefaConcluida, 1)

console.log(listaDeTarefas)
console.log(tarefaConcluida)
 