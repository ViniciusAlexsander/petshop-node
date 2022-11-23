import { PetService } from './pet.service';
import { Pet } from 'entity/Pet';
import { Servico } from "entity/Servico";
import { AppDataSource } from "data-source";

export const servicoService = AppDataSource.getRepository(Servico).extend({
  criarServico: async function (
    dataEntrada: Date,
    dataSaida: Date,
    descricao: string
  ) {
    try {

      const servico = new Servico(dataEntrada, dataSaida, descricao);

      return await this.save(servico);
    } catch (error) {
      throw error;
    }
  },

  buscarServicos: async function () {
    try {
      const servicos = await this.find({
        relations: ["pagCartao", "pagDinheiro"],
      });
      return servicos;
    } catch (error) {
      throw error;
    }
  },

  buscarServicoId: async function (id: number) {
    try {
      const servico = await this.findOne({
        where: { id },
				relations: ["pagCartao", "pagDinheiro"],
      });
      return servico;
    } catch (error) {
      throw error;
    }
  },

	adicionarServicoPet: async function (id: number,petId : number) {
		try {
			const servico: Servico = await this.buscarServicoId(id);
			const pet : Pet = await PetService.buscarPetPorId(petId)
			if(!pet) {
				throw new Error("Pet não encontrado");
			}
			else {
				servico.adicionarPet(pet)
				this.save(servico)
			}

		} catch (error) {

		}
	},

  alterarServico: async function (
    id: number,
    dataEntrada: Date,
    dataSaida: Date,
    descricao: string
  ) {
    try {
      let servico = await this.buscarServicoId(id);

      servico = {
        dataEntrada,
        dataSaida,
        descricao,
      };
      return await this.save(servico);
    } catch (error) {
      throw error;
    }
  },

  deletarServico: async function (id: number) {
    try {
      await this.delete(id);
    } catch (error) {
      throw error;
    }
  },
});
