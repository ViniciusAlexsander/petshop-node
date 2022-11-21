import { Endereco } from "entity/Endereco";
import { Telefone } from "entity/Telefone";
import { AppDataSource } from "../data-source";
import { Pessoa } from "../entity/Pessoa";
import { EnderecoService } from "./endereco.service";

export const PessoaService = AppDataSource.getRepository(Pessoa).extend({
  criarPessoa: async function (nome: string, email: string, codNac: string) {
    try {
      const pessoa = new Pessoa(nome, email, codNac);
      return await this.save(pessoa);
    } catch (error) {
      throw error;
    }
  },

  adicionarEndereco: async function (pessoaId: number, enderecoId: number) {
    try {
      const pessoa: Pessoa = await this.buscarPessoaPorId(pessoaId);
      const endereco: Endereco = await EnderecoService.buscarEnderecoPorId(enderecoId);
      pessoa.adicionarEndereco(endereco);
      await this.save(pessoa);
    } catch (error) {
      throw error;
    }
  },

  removerEndereco: async function (pessoaId: number, enderecoId: number) {
    try {
      const pessoa: Pessoa = await this.buscarPessoaPorId(pessoaId);
      const endereco: Endereco = await EnderecoService.buscarEnderecoPorId(enderecoId);
      pessoa.removerEndereco(endereco);
      await this.save(pessoa);
    } catch (error) {
      throw error;
    }
  },

  adicionarTelefone: async function (pessoaId: number, telefone: string) {
    try {
      console.log({ pessoaId, telefone })
      const pessoa: Pessoa = await this.buscarPessoaPorId(pessoaId);
      console.log(pessoa)
      pessoa.adicionarTelefone(new Telefone(telefone));
      await this.save(pessoa);
    } catch (error) {
      throw error;
    }
  },

  removerTelefone: async function (pessoaId: number, telefone: string) {
    try {
      const pessoa: Pessoa = await this.buscarPessoaPorId(pessoaId);
      pessoa.removerTelefone(new Telefone(telefone));
      await this.save(pessoa);
    } catch (error) {
      throw error;
    }
  },

  buscarPessoaPorId: async function (id: number) {
    try {
      const pessoa = await this.findOne({
        where: { id },
      });
      return pessoa;
    } catch (error) {
      throw error;
    }
  },

  buscarPessoaPorEmail: async function (email: string) {
    try {
      const pessoa = await this.findOne({
        where: { email },
      });
      return pessoa;
    } catch (error) {
      throw error;
    }
  },

  alterarPessoa: async function (id: number, nome: string, email: string, codNac: string) {
    try {
      const pessoa: Pessoa = await this.buscarPessoaPorId(id);
      pessoa.alterarUsuario(nome, email, codNac);
      return await this.save(pessoa);
    } catch (error) {
      throw error;
    }
  },

  deletarPessoa: async function (id: number) {
    try {
      const pessoa: Pessoa = await this.buscarPessoaPorId(id);
      pessoa.invalidar();
      await this.save(pessoa);
    } catch (error) {
      throw error;
    }
  }
})