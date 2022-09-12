import { Router } from "express";
import { Cliente } from "../entity/Cliente";
import { ClienteService } from "../service/ClienteService";
import { Controller } from "./Controller";
import { Request, Response } from "express";

export class ClienteController implements Controller {
    
    public path = '/clientes';
    public router = Router();
    private clienteService: ClienteService

    constructor() {
        this.router.post(`${this.path}`, this.create)
        this.clienteService = new ClienteService()
    }

    create = async (req: Request, res: Response) => {
        const cliente = req.body as Cliente
        await this.clienteService.create(cliente)
            .then(result => { return res.status(201).send(result) })
            .catch(err => { return res.status(400).send("Can't possible create cliente.") })
    }

}