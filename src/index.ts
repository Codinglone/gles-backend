require('dotenv').config()
import { AppDataSource } from "./data-source"
const PORT = process.env.PORT || 7000
const fastify = require('fastify')({logger: true})

const start = async () => {
    try {
        await fastify.listen({ port: PORT })
        AppDataSource.initialize().then(async () => {

            console.log("Connected!!!")
        
        }).catch(error => console.log(error))
    } catch (error) {
        fastify.log(error)
        process.exit(1)
    }
}

start()

