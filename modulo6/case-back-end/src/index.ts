import { App } from "./App";
import { OrderController } from "./controller/OrderController";
import { ProductsController } from "./controller/ProductsController";
import dotenv from 'dotenv'
import { ClienteController } from "./controller/ClienteController";

dotenv.config()

const app = new App([
    new ProductsController(),
    new OrderController(),
    new ClienteController()
])

app.listen(Number(process.env.SERVER_PORT))
