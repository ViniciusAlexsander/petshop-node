import "reflect-metadata";
import { DataSource } from "typeorm";
import { Categoria } from "entity/Categoria";
import { Especie } from "entity/Especie";
import { Funcionario } from "entity/Funcionario";
import { Pagamento } from "entity/Pagamento";
import { PagCartao } from "entity/PagCartao";

import { Cidade } from "./entity/Cidade";
import { Endereco } from "./entity/Endereco";
import { Estado } from "./entity/Estado";
import { Pessoa } from "./entity/Pessoa";
import { Telefone } from "./entity/Telefone";
import { Pet } from "entity/Pet";
import { Produto } from "entity/Produto";
import { Servico } from "entity/Servico";
import { Raca } from "./entity/Raca";
import { PagDinheiro } from "entity/PagDinheiro";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "ec2-54-86-224-85.compute-1.amazonaws.com",
  port: 5432,
  username: "fqqtnregrxrlgg",
  password: "f31aa5561ca0e5f88db3a1f0211ebfbf657cd3b17a1b40116dc5374bc433df4e",
  database: "d9rrg7vsrbvrv2",
  synchronize: true,
  logging: false,
  entities: [
    Cidade,
    Endereco,
    Estado,
    Pessoa,
    Telefone,
    Categoria,
    Especie,
    Funcionario,
    Pagamento,
    PagDinheiro,
    PagCartao,
    Pet,
    Produto,
    Raca,
    Servico,
  ],
  migrations: [`${__dirname}/../infrastructure/migration/**/*.{js,ts}`],
  ssl: { rejectUnauthorized: false },
});
