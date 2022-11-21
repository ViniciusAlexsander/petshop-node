import { Router, Request, Response } from "express";
import { EnderecoService } from "service/endereco.service";
import { PessoaService } from "service/pessoa.service";

export const pessoaRoutes = Router();

pessoaRoutes.post("/", async (req: Request, res: Response): Promise<Response> => {
    try {
        const { nome, email, codNac } = req.body;
        console.log(req.body)

        const pessoaExiste = await PessoaService.buscarPessoaPorEmail(email);
        if(pessoaExiste) return res.status(400).send("Pessoa já existe");

        await PessoaService.criarPessoa(nome, email, codNac);

        return res.status(201).send();
    } catch (error) {
        return res.status(500).send("Error:" + error.message);
    }
});


pessoaRoutes.get("/:id", async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;

        const pessoa = await PessoaService.buscarPessoaPorId(+id);
        if(!pessoa) return res.status(400).send("Pessoa não existe");

        return res.status(201).send(pessoa);
    } catch (error) {
        return res.status(500).send("Error:" + error.message);
    }
});

pessoaRoutes.put("/:id", async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const { name, email, codNac } = req.body;

        const pessoaExiste = await PessoaService.buscarPessoaPorId(+id);
        if(!pessoaExiste) return res.status(400).send("Pessoa não existe");

        await PessoaService.alterarPessoa(+id, name, email, codNac);

        const pessoa = await PessoaService.buscarPessoaPorId(+id);

        return res.status(201).send(pessoa);
    } catch (error) {
        return res.status(500).send("Error:" + error.message);
    }
});

pessoaRoutes.delete("/:id", async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;

        const pessoaExiste = await PessoaService.buscarPessoaPorId(+id);
        if(!pessoaExiste) return res.status(400).send("Pessoa não existe");
        
        await PessoaService.deletarPessoa(+id);

        return res.status(200).json();
    } catch (error) {
        return res.status(500).send("Error:" + error.message);
    }
});
