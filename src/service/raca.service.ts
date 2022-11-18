import { AppDataSource } from "../data-source";
import { Raca } from "../entity/Raca";

export const RacaService = AppDataSource.getRepository(Raca).extend({
  criarRaca: async function (descricao: string) {
    try {
      const raca = new Raca(descricao);
      return await this.save(raca);
    } catch (error) {
      throw error;
    }
  },

  buscarRacaPorId: async function (id: number) {
    try {
      const raca = await this.findOne({
        where: { id },
      });
      return raca;
    } catch (error) {
      throw error;
    }
  },

  alterarRaca: async function (id: number, descricao: string) {
    try {
      let raca = await this.buscarRacaPorId(id);

      raca = {
        ...raca,
        descricao,
      };

      return await this.save(raca);
    } catch (error) {
      throw error;
    }
  },

  deletarRaca: async function (id: number) {
    try {
      const raca: Raca = await this.buscarRacaPorId(id);
      raca.invalidar();
      await this.save(raca);
    } catch (error) {
      throw error;
    }
  },
});
