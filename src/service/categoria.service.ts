import { AppDataSource } from "../data-source";
import { Categoria } from "../entity/Categoria";

export const CategoriaService = AppDataSource.getRepository(Categoria).extend({
    criarCategoria: async function (nome: string, preco:number) {
      try {
        const categoria = new Categoria(nome);
        return await this.save(categoria);
      } catch (error) {
        throw error;
      }
    },
  
    buscarCategoriaPorId: async function (id: number) {
      try {
        const categoria = await this.findOne({
          where: { id },
        });
        return categoria;
      } catch (error) {
        throw error;
      }
    },
  
    alterarCategoria: async function (id: number, nome: string) {
      try {
        let categoria = await this.buscarCategoriaPorId(id);
  
        categoria = {
          ...categoria,
          nome

        };
  
        return await this.save(categoria);
      } catch (error) {
        throw error;
      }
    },
  
    deletarCategoria: async function (id: number) {
      try {
        const categoria: Categoria = await this.buscarCategoriaPorId(id);
        categoria.invalidar();
        await this.save(categoria);
      } catch (error) {
        throw error;
      }
    },
  });