import { Cidade } from "entity/Cidade";
import { Estado } from "entity/Estado";
import { AppDataSource } from "../data-source";
import { CidadeService } from "./cidade.service";

export const EstadoService = AppDataSource.getRepository(Estado).extend({
    criarEstado: async function (nome: string) {
        try {
            if (this.estadoValido(nome)) {
                const estado = new Estado(nome);
                return await this.save(estado);
            } else 
                throw new Error("Estado inválido!")
        } catch (error) {
            throw error;
        }
    },

    adicionarCidade: async function (estadoId: number, cidadeId: number) {
        try {
            const estado: Estado = await this.buscarEstadoPorId(estadoId);
            const cidade: Cidade = await CidadeService.buscarCidadePorId(cidadeId);

            estado.adicionarCidade(cidade);
            this.save(estado);
        } catch (error) {
            throw error;
        }
    },

    estadoValido: function (sigla: string) {
        return ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"].includes(sigla);
    },

    buscarEstadoPorId: async function (id: number) {
        try {
            const estado = await this.findOne({
                where: { id },
            });
            return estado;
        } catch (error) {
            throw error;
        }
    }
});
