import { Router, Request, Response } from "express";
import { CidadeService } from "service/cidade.service";

export const cidadeRoutes = Router();

cidadeRoutes.post("/", async (req: Request, res: Response): Promise<Response> => {
    try {
        const { nome } = req.body;

        await CidadeService.criarEndereco(nome);

        return res.status(200).send();
    } catch (error) {
        return res.status(500).send("Error:" + error.message);
    }
});

cidadeRoutes.get("/:id", async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const endereco = await CidadeService.buscarCidadePorId(+id);
        return res.status(200).send(endereco);
    } catch (error) {
        return res.status(500).send("Error:" + error.message);
    }
});

cidadeRoutes.get("/nome/:nome", async (req: Request, res: Response): Promise<Response> => {
    try {
        const { nome } = req.params;
        const endereco = await CidadeService.buscarCidadePorNome(nome);
        return res.status(200).send(endereco);
    } catch (error) {
        return res.status(500).send("Error:" + error.message);
    }
});
