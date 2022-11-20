import { Cidade } from "entity/Cidade";
import { Endereco } from "entity/Endereco";
import { getHeapStatistics } from "v8";
import { AppDataSource } from "../data-source";
import { EnderecoService } from "./endereco.service";

export const CidadeService = AppDataSource.getRepository(Cidade).extend({
    criarEndereco: async function (nome: string) {
        try {
            const cidade = new Cidade(nome);
            const cidadeJaCadastrada = await this.buscarCidadePorNome(nome);

            if (!cidadeJaCadastrada)
                return await this.save(cidade);
            else
                throw new Error("Cidade já cadastrada");
        } catch (error) {
            throw error;
        }
    },

    adicionarEndereco: async function (cidadeId: number, enderecoId: number) {
        try {
            const cidade: Cidade = await this.buscarCidadePorId(cidadeId);
            const endereco: Endereco = await EnderecoService.buscarEnderecoPorId(enderecoId);

            cidade.adicionarEndereco(endereco);
            await this.save(cidade);
        } catch (error) {
            throw error;
        }
    },

    
    removerEndereco: async function (cidadeId: number, enderecoId: number) {
        try {
            const cidade: Cidade = await this.buscarCidadePorId(cidadeId);
            const endereco: Endereco = await EnderecoService.buscarEnderecoPorId(enderecoId);

            cidade.removerEndereco(endereco);
            await this.save(cidade);
        } catch (error) {
            throw error;
        }
    },

    buscarCidadePorId: async function (id: number) {
        try {
            const cidade = await this.findOne({
                where: { id },
            });
            return cidade;
        } catch (error) {
            throw error;
        }
    },


    buscarCidadePorNome: async function (nome: string) {
        try {
            const cidade = await this.findOne({
                where: { nome },
            });
            return cidade;
        } catch (error) {
            throw error;
        }
    },
});
