import { AppDataSource } from "../data-source";
import { Cliente } from "../entity/Cliente";

export const ClienteService = AppDataSource.getRepository(Cliente).extend({
    criarCliente: async function (nome: string, email: string, codNac: string, tipo: string) {
      try {
        const cliente = new Cliente(nome, email, codNac, tipo);
        return await this.save(cliente);
      } catch (error) {
        throw error;
      }
    },
  
    buscarClientePorId: async function (id: number) {
      try {
        const cliente = await this.findOne({
          where: { id },
        });
        return cliente;
      } catch (error) {
        throw error;
      }
    },
  
    alterarCliente: async function (id: number, nome: string, email: string, codNac: string, tipo: string) {
      try {
        let cliente = await this.buscarClientePorId(id);
  
        cliente = {
          ...cliente,
          nome,
          email,
          codNac,
          tipo
        };
  
        return await this.save(cliente);
      } catch (error) {
        throw error;
      }
    },
  
    deletarCliente: async function (id: number) {
      try {
        const cliente: Cliente = await this.buscarClientePorId(id);
        cliente.invalidar();
        await this.save(cliente);
      } catch (error) {
        throw error;
      }
    },
  });