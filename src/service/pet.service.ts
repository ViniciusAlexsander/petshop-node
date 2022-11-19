import { Especie } from "entity/Especie";
import { Raca } from "entity/Raca";
import { AppDataSource } from "../data-source";
import { Pet } from "../entity/Pet";

export const PetService = AppDataSource.getRepository(Pet).extend({
  criarPet: async function (
    nome: string,
    especieId: number,
    racaId: number,
    idade: number
  ) {
    try {
      const pet = this.create({
        nome,
        especieId,
        racaId,
        idade,
      });

      return await this.save(pet);
    } catch (error) {
      throw error;
    }
  },

  buscarPetPorId: async function (id: number) {
    try {
      const pet = await this.findOne({
        where: { id },
      });
      return pet;
    } catch (error) {
      throw error;
    }
  },

  alterarPet: async function (
    id: number,
    nome: string,
    especieId: number,
    racaId: number,
    idade: number
  ) {
    try {
      let pet = await this.buscarPetPorId(id);

      pet = {
        ...pet,
        nome,
        especieId,
        racaId,
        idade,
      };

      return await this.save(pet);
    } catch (error) {
      throw error;
    }
  },

  deletarPet: async function (id: number) {
    try {
      await this.delete(id);
    } catch (error) {
      throw error;
    }
  },
});
