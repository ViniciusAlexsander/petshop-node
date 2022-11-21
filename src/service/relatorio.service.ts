import { Servico } from "entity/Servico";
import { Between } from "typeorm";
import { AppDataSource } from "../data-source";

export const RelatorioService = AppDataSource.getRepository(Servico).extend({
  solicitarRelatorio: async function (dataInicial: Date, dataFinal: Date) {
    try {
      const servicos = await this.find({
        where: { createAt: Between(dataInicial, dataFinal) },
      });

      const servico = await this.find({
        where: { createAt: dataFinal },
      });

      console.log({ servico });
      return servicos;
    } catch (error) {
      throw error;
    }
  },
});
