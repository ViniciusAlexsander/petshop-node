import { AppDataSource } from "../data-source";
import { Especie } from "../entity/Especie";

export const EspecieService = AppDataSource.getRepository(Especie).extend({
  criarEspecie: async function (descricao: string) {
    try {
      const especie = new Especie(descricao);
      return await this.save(especie);
    } catch (error) {
      throw error;
    }
  },

  buscarEspeciePorId: async function (id: number) {
    try {
      const especie = await this.findOne({
        where: { id },
      });
      return especie;
    } catch (error) {
      throw error;
    }
  },

  alterarEspecie: async function (id: number, descricao: string) {
    try {
      let especie = await this.buscarEspeciePorId(id);

      especie = {
        ...especie,
        descricao,
      };

      return await this.save(especie);
    } catch (error) {
      throw error;
    }
  },

  deletarEspecie: async function (id: number) {
    try {
      const especie: Especie = await this.buscarEspeciePorId(id);
      especie.invalidar();
      await this.save(especie);
    } catch (error) {
      throw error;
    }
  },
});
