import { Router, Request, Response } from "express";
import { EnderecoService } from "service/endereco.service";

export const enderecoRoutes = Router();

enderecoRoutes.post("/", async (req: Request, res: Response): Promise<Response> => {
    try {
        const { nome, numero, complemento, bairro, cep, cidadeId, pessoaId } = req.body;

        await EnderecoService.criarEndereco(nome, numero, complemento, bairro, cep, cidadeId, pessoaId);

        return res.status(200).send();
    } catch (error) {
        return res.status(500).send("Error:" + error.message);
    }
});

enderecoRoutes.get("/:id", async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const endereco = await EnderecoService.buscarEnderecoPorId(+id);
        return res.status(200).send(endereco);
    } catch (error) {
        return res.status(500).send("Error:" + error.message);
    }
});

