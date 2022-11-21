import { Servico } from "entity/Servico";
import { AppDataSource } from "../data-source";
import { PagDinheiro } from "../entity/PagDinheiro";

export const PagamentoDinheiroService = AppDataSource.getRepository(
  PagDinheiro
).extend({
  criarPagDinheiro: async function (
    dataVencimento: Date,
    dataPagamento: Date,
    situacao: string,
    servico: Servico
  ) {
    try {
      const pagDinheiro = new PagDinheiro(
        dataVencimento,
        dataPagamento,
        situacao,
        servico
      );

      await this.save(pagDinheiro);
      return servico.adicionarPagamento(pagDinheiro);
    } catch (error) {
      throw error;
    }
  },

  buscarPagDinheiroPorId: async function (id: number) {
    try {
      const pagDinheiro = await this.findOne({
        where: { id },
      });
      return pagDinheiro;
    } catch (error) {
      throw error;
    }
  },

  alterarPagDinheiro: async function (
    id: number,
    dataVencimento: Date,
    dataPagamento: Date,
    situacao: string
  ) {
    try {
      let pagDinheiro = await this.buscarPagCartaoPorId(id);

      pagDinheiro = {
        ...pagDinheiro,
        dataVencimento,
        dataPagamento,
        situacao,
      };

      return await this.save(pagDinheiro);
    } catch (error) {
      throw error;
    }
  },

  deletarPagDinheiro: async function (id: number) {
    try {
      const pagDinheiro: PagDinheiro = await this.buscarPagDinheiroPorId(id);
      pagDinheiro.invalidar();
      await this.save(pagDinheiro);
    } catch (error) {
      throw error;
    }
  },
});
