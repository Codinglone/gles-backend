import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users } from "./entity/Users"
import { Countries } from "./entity/Countries"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "codinglone2023",
    database: "gles",
    synchronize: true,
    logging: false,
    entities: [Users, Countries],
    migrations: [],
    subscribers: [],
})
