import { AppDataSource } from "../data-source";
import { Pessoa } from "../entity/Pessoa";

export const PessoaService = AppDataSource.getRepository(Pessoa).extend({
  criarPessoa: async function (nome: string, email: string, codNac: string) {
    try {
      const pessoa = new Pessoa(nome, email, codNac);
      return await this.save(pessoa);
    } catch (error) {
      throw error;
    }
  },

  buscarPessoaPorID: async function (id: number) {
    try {
      const pessoa = await this.findOne({ where: { id }, relations: ['endereco'] })
      return pessoa;
    } catch (error) {
      throw error;
    }
  },

  alterarPessoa: async function (id: number, nome: string, email: string, codNac: string) {
    try {
      const pessoa = await this.buscarPessoaPorID(id);
      pessoa(nome, email, codNac);
      return await this.save(pessoa);
    } catch (error) {
      throw error;
    }
  },

  deletarPessoa: async function (id: number) {
    try {
      const pessoa: Pessoa = await this.buscarPessoaPorID(id);
      pessoa.invalidar();
      await this.save(pessoa);
    } catch (error) {
      throw error;
    }
  }
})