require('dotenv').config()
import { AppDataSource } from "./data-source"
const PORT = process.env.PORT || 7000
const fastify = require('fastify')({logger: true})

fastify.register(require('@fastify/swagger'), {
    exposeRoute: true,
    routePrefix: '/api-docs',
    swagger: {
        info: {
            title: 'GLES REST API Documentation',
            description: 'GLES Web application backend using Fastify, TypeORM and Postgres',
            version: '1.0.0'
        }
    }
})

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

