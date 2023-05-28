import { AppDataSource } from "./data-source"
import { Users } from "./entity/Users"

AppDataSource.initialize().then(async () => {

    console.log("Connected!!!")

}).catch(error => console.log(error))
