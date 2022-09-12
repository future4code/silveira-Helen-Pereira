import { Cliente } from "../entity/Cliente";
import { ClienteRepository } from "../repository/ClienteRepository";

export class ClienteService {

    private clienteRepository: ClienteRepository

    constructor() {
        this.clienteRepository = new ClienteRepository()
    }

    create = async (cliente: Cliente) => {
        if(cliente.idade >= 18) { 
            this.clienteRepository.create(cliente)
            console.log("Service - Sucesso")
            return true
        } else {
            throw new Error("Idade nao permitida.")
            return false
        }
    }

}