import { AppDataSource } from "../data-source";
import { Produto } from "../entity/Produto";

export const ProdutoService = AppDataSource.getRepository(Produto).extend({
    criarProduto: async function (nome: string, preco:number) {
      try {
        const produto = new Produto(nome, preco);
        return await this.save(produto);
      } catch (error) {
        throw error;
      }
    },

    buscarProdutoPorId: async function (id: number) {
      try {
        const produto = await this.findOne({
          where: { id },
        });
        return produto;
      } catch (error) {
        throw error;
      }
    },

    alterarProduto: async function (id: number, nome: string, preco:number) {
      try {
        let produto = await this.buscarProdutoPorId(id);

        produto = {
          ...produto,
          nome,
          preco
        };

        return await this.save(produto);
      } catch (error) {
        throw error;
      }
    },

    deletarProduto: async function (id: number) {
      try {
        const produto: Produto = await this.buscarProdutoPorId(id);
        produto.invalidar();
        await this.save(produto);
      } catch (error) {
        throw error;
      }
    },
  });
