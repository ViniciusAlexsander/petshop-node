import "reflect-metadata"
import { DataSource } from "typeorm"
import { Cidade } from "./entity/Cidade";
import { Endereco } from "./entity/Endereco";
import { Estado } from "./entity/Estado";
import { Pessoa } from "./entity/Pessoa";
import { Telefone } from "./entity/Telefone";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [Cidade, Endereco, Estado, Pessoa, Telefone],
    migrations: [],
    subscribers: [],
})
