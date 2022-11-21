import { Servico } from "entity/Servico";
import { AppDataSource } from "../data-source";
import { PagCartao } from "../entity/PagCartao";

export const PagamentoCartaoService = AppDataSource.getRepository(
  PagCartao
).extend({
  criarPagCartao: async function (
    parcelas: number,
    situacao: string,
    servico: Servico
  ) {
    try {
      const pagCartao = new PagCartao(parcelas, situacao, servico);

      await this.save(pagCartao);
      return await servico.adicionarPagamento(pagCartao);
    } catch (error) {
      throw error;
    }
  },

  buscarPagCartaoPorId: async function (id: number) {
    try {
      const pagCartao = await this.findOne({
        where: { id },
      });
      return pagCartao;
    } catch (error) {
      throw error;
    }
  },

  alterarPagCartao: async function (
    id: number,
    parcelas: number,
    situacao: string
  ) {
    try {
      let pagCartao = await this.buscarPagCartaoPorId(id);

      pagCartao = {
        ...pagCartao,
        parcelas,
        situacao,
      };

      return await this.save(pagCartao);
    } catch (error) {
      throw error;
    }
  },

  deletarPagCartao: async function (id: number) {
    try {
      const pagCartao: PagCartao = await this.buscarPagCartaoPorId(id);
      pagCartao.invalidar();
      await this.save(pagCartao);
    } catch (error) {
      throw error;
    }
  },
});
