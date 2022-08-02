//EXERCICIO 1

import { isConstructorDeclaration } from "typescript";

// A) O construtor é um método onde toda classe possui um construtor, caso ele não for informado ele ficará vazio, devendo assim sempre ser declarado como uma função. Usado para situações que pode criar um padrão de igualdade de dados/informações.

//B) Foi impresso "Chamando o construtor da classe UserAccount"

//C) Para acessar as informações privadas usamos o método getter para pegar e setters para alterar. 


//EXERCICIO 2


type Transaction = {
    private description: string,
    private value: number,
    private date: string
  }

  constructor(novaDescription:string, novoValue:number, novaDate:string) {
      this.description = novaDescription
      this.value = novoValue
      this.date = novaDate
  }
  
public pegarDescription():void{
    console.log(this.description)
}





  class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
  }