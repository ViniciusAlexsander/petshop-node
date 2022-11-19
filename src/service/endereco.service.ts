import { Endereco } from "entity/Endereco";
import { AppDataSource } from "../data-source";
import { CidadeService } from "./cidade.service";
import { PessoaService } from "./pessoa.service";

export const EnderecoService = AppDataSource.getRepository(Endereco).extend({
    criarEndereco: async function (
        nome: string,
        numero: number,
        complemento: string,
        bairro: string,
        cep: string,
        cidadeID: string,
        pessoaID: string) {
        try {
            const cidade = await CidadeService.buscarCidadePorId(+cidadeID);
            const pessoa = await PessoaService.buscarPessoaPorId(+pessoaID);
            const endereco = new Endereco(nome, numero, complemento, bairro, cep, cidade, pessoa);
            return await this.save(endereco);
        } catch (error) {
            throw error;
        }
    },

    buscarEnderecoPorId: async function (id: number) {
        try {
            const endereco = await this.findOne({ where: { id } })
            return endereco;
        } catch (error) {
            throw error;
        }
    }

})


