import "reflect-metadata";
import { DataSource } from "typeorm";
import { Pessoa } from "./entity/Pessoa";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "ec2-54-86-224-85.compute-1.amazonaws.com",
  port: 5432,
  username: "fqqtnregrxrlgg",
  password: "f31aa5561ca0e5f88db3a1f0211ebfbf657cd3b17a1b40116dc5374bc433df4e",
  database: "d9rrg7vsrbvrv2",
  synchronize: true,
  logging: false,
  entities: [Pessoa],
  migrations: [],
  subscribers: [],
});
