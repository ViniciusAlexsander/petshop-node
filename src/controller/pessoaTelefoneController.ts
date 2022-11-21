import { Request, Response, Router } from "express";
import { PessoaService } from "service/pessoa.service";

export const pessoaTelefoneRoutes = Router();

pessoaTelefoneRoutes.post("/:id", async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const { telefone } = req.body;

        console.log(req.body);

        const pessoaExiste = await PessoaService.buscarPessoaPorId(+id);
        if (!pessoaExiste)
            return res.status(400).send("Pessoa não existe");

        const pessoa = await PessoaService.adicionarTelefone(+id, telefone);
        return res.status(201).send(pessoa);
    } catch (error) {
        return res.status(500).send("Error:" + error.message);
    }
});

pessoaTelefoneRoutes.delete("/:id", async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const { telefone } = req.body;

        console.log(req.body);

        const pessoaExiste = await PessoaService.buscarPessoaPorId(+id);
        if (!pessoaExiste)
            return res.status(400).send("Pessoa não existe");

        const pessoa = await PessoaService.removerTelefone(+id, telefone);
        return res.status(201).send(pessoa);
    } catch (error) {
        return res.status(500).send("Error:" + error.message);
    }
});
