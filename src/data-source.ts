import "reflect-metadata";
import { DataSource } from "typeorm";
import { Cidade } from "./entity/Cidade";
import { Endereco } from "./entity/Endereco";
import { Estado } from "./entity/Estado";
import { Pessoa } from "./entity/Pessoa";
import { Telefone } from "./entity/Telefone";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "ec2-54-86-224-85.compute-1.amazonaws.com",
  port: 5432,
  username: "fqqtnregrxrlgg",
  password: "f31aa5561ca0e5f88db3a1f0211ebfbf657cd3b17a1b40116dc5374bc433df4e",
  database: "d9rrg7vsrbvrv2",
  synchronize: true,
  logging: false,
  entities: [Cidade, Endereco, Estado, Pessoa, Telefone],
  migrations: [],
  subscribers: [],
});
