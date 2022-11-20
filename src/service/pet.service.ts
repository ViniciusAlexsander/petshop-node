import { Especie } from "entity/Especie";
import { Raca } from "entity/Raca";
import { AppDataSource } from "../data-source";
import { Pet } from "../entity/Pet";
import { EspecieService } from "./especie.service";
import { RacaService } from "./raca.service";

export const PetService = AppDataSource.getRepository(Pet).extend({
  criarPet: async function (
    nome: string,
    especieId: number,
    racaId: number,
    idade: number
  ) {
    try {
      const especie = await EspecieService.buscarEspeciePorId(especieId);
      const raca = await RacaService.buscarRacaPorId(racaId);

      if (!especie || !raca) {
        throw new Error("Especie ou raça não existe");
      }

      const pet = new Pet(nome, especie, raca, idade);

      return await this.save(pet);
    } catch (error) {
      throw error;
    }
  },

  buscarPetPorId: async function (id: number): Promise<Pet> {
    try {
      const pet = await this.findOne({
        where: { id },
        relations: ["raca", "especie"],
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

      if (!pet) {
        throw new Error("Pet não existe");
      }

      const especie = await EspecieService.buscarEspeciePorId(especieId);
      const raca = await RacaService.buscarRacaPorId(racaId);

      if (!especie || !raca) {
        throw new Error("Especie ou raça não existe");
      }

      pet = {
        ...pet,
        nome,
        especie,
        raca,
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
