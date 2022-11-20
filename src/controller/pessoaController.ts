import { Router, Request, Response } from "express";
import { EnderecoService } from "service/endereco.service";
import { PessoaService } from "service/pessoa.service";

export const pessoaRoutes = Router();

pessoaRoutes.post("/", async (req: Request, res: Response): Promise<Response> => {
    try {
        const { nome, email, codNac } = req.body;

        await PessoaService.criarPessoa(nome, email, codNac);

        return res.status(201).send();
    } catch (error) {
        return res.status(500).send("Error:" + error.message);
    }
});

pessoaRoutes.post("/:id/:enderecoId", async (req: Request, res: Response): Promise<Response> => {
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

pessoaRoutes.post("/:id", async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const { telefone } = req.body;

        const pessoa = await PessoaService.adicionarTelefone(+id, telefone);

        return res.status(201).send(pessoa);
    } catch (error) {
        return res.status(500).send("Error:" + error.message);
    }
});

pessoaRoutes.get("/:id", async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;

        const pessoa = await PessoaService.buscarPessoaPorId(+id);

        return res.status(201).send(pessoa);
    } catch (error) {
        return res.status(500).send("Error:" + error.message);
    }
});

pessoaRoutes.put("/:id", async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const { name, email, codNac } = req.body;

        const pessoa = await PessoaService.alterarPessoa(+id, name, email, codNac);

        return res.status(201).send(pessoa);
    } catch (error) {
        return res.status(500).send("Error:" + error.message);
    }
});

pessoaRoutes.delete("/:id", async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;

        await PessoaService.deletarPessoa(+id);

        return res.status(200).json();
    } catch (error) {
        return res.status(500).send("Error:" + error.message);
    }
});

pessoaRoutes.delete("/:id/:enderecoId", async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id, enderecoId } = req.params;

        const endereco = await EnderecoService.buscarEnderecoPorId(+enderecoId)

        if (!endereco) return res.status(404).send("Endereço não encontrado");

        const pessoa = await PessoaService.removerEndereco(+id, +enderecoId);

        return res.status(201).send(pessoa);
    } catch (error) {
        return res.status(500).send("Error:" + error.message);
    }
});



