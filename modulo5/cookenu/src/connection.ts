import knex from "knex";
import dotenv from "dotenv"
dotenv.config()


const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_PASSAWORD,
        database: process.env.DB_NAME,
        multipleStatements: true
    }
})