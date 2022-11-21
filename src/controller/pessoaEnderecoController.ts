import { Request, Response, Router } from "express";
import { EnderecoService } from "service/endereco.service";
import { PessoaService } from "service/pessoa.service";

export const pessoaEnderecoRoutes = Router();

pessoaEnderecoRoutes.post("/:id/:enderecoId", async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id, enderecoId } = req.params;
        const endereco = await EnderecoService.buscarEnderecoPorId(+enderecoId)

        if (!endereco) return res.status(404).send("Endereço não encontrado");

        const pessoa = await PessoaService.adicionarEndereco(+id, +enderecoId);

        return res.status(201).send(pessoa);
    } catch (error) {
        return res.status(500).send("Error:" + error.message);
    }
});

pessoaEnderecoRoutes.delete("/:id/:enderecoId", async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id, enderecoId } = req.params;

        const pessoaExiste = await PessoaService.buscarPessoaPorId(+id);
        if(!pessoaExiste) return res.status(400).send("Pessoa não existe");

        const endereco = await EnderecoService.buscarEnderecoPorId(+enderecoId)

        if (!endereco) return res.status(404).send("Endereço não encontrado");

        const pessoa = await PessoaService.removerEndereco(+id, +enderecoId);

        return res.status(201).send(pessoa);
    } catch (error) {
        return res.status(500).send("Error:" + error.message);
    }
});

