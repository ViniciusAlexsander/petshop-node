import { AppDataSource } from "../data-source";
import { Funcionario } from "../entity/Funcionario";

export const FuncionarioService = AppDataSource.getRepository(Funcionario).extend({
    criarFuncionario: async function (nome: string, email: string, codNac: string, funcao: string) {
      try {
        const funcionario = new Funcionario(nome, email, codNac, funcao);
        return await this.save(funcionario);
      } catch (error) {
        throw error;
      }
    },
  
    buscarFuncionarioPorId: async function (id: number) {
      try {
        const funcionario = await this.findOne({
          where: { id },
        });
        return funcionario;
      } catch (error) {
        throw error;
      }
    },
  
    alterarFuncionario: async function (id: number, descricao: string) {
      try {
        let funcionario = await this.buscarFuncionarioPorId(id);
  
        funcionario = {
          ...funcionario,
          descricao,
        };
  
        return await this.save(funcionario);
      } catch (error) {
        throw error;
      }
    },
  
    deletarFuncionario: async function (id: number) {
      try {
        const funcionario: Funcionario = await this.buscarFuncionarioPorId(id);
        funcionario.invalidar();
        await this.save(funcionario);
      } catch (error) {
        throw error;
      }
    },
  });