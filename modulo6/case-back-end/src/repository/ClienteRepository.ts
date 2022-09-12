import { connection } from "../connection";
import { Cliente } from "../entity/Cliente";

export class ClienteRepository {

    create = async (cliente: Cliente) => {
        connection.insert({
            nome: cliente.nome,
            idade: cliente.idade
            
        }).table('cliente')
        .then(res=> {
            console.log("Sucesso")
        })
        .catch(err => {
            console.log("Erro", err)
        })
    }

}