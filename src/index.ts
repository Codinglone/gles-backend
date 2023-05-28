import { AppDataSource } from "./data-source"
const fastify = require('fastify')({logger: true})

const start = async () => {
    try {
        await fastify.listen({ port: 5000 })
    } catch (error) {
        fastify.log(error)
        process.exit(1)
    }
}

AppDataSource.initialize().then(async () => {

    console.log("Connected!!!")

}).catch(error => console.log(error))
