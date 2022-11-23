import { Servico } from "entity/Servico";
import { Between } from "typeorm";
import { AppDataSource } from "../data-source";

export const RelatorioService = AppDataSource.getRepository(Servico).extend({
  solicitarRelatorio: async function (dataInicial: Date, dataFinal: Date) {
    try {
      const servicos = await this.find({
        where: { createAt: Between(dataInicial, dataFinal) },
				relations:["pet","pagDinheiro","pagCartao"]
      });
      return servicos;
    } catch (error) {
      throw error;
    }
  },
});
