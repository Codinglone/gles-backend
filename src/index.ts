import { AppDataSource } from "./data-source"
const fastify = require('fastify')({logger: true})


AppDataSource.initialize().then(async () => {

    console.log("Connected!!!")

}).catch(error => console.log(error))
