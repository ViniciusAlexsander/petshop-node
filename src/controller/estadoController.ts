import { Router, Request, Response } from "express";
import { EstadoService } from "service/estado.service";

export const estadoRoutes = Router();

estadoRoutes.post("/:id/:cidadeId", async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id, cidadeId } = req.params;

        await EstadoService.adicionarCidade(+id, +cidadeId);

        return res.status(200).send();
    } catch (error) {
        return res.status(500).send("Error:" + error.message);
    }
});

estadoRoutes.get("/:id", async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const estado = await EstadoService.buscarEstadoPorId(+id);
        return res.status(200).send(estado);
    } catch (error) {
        return res.status(500).send("Error:" + error.message);
    }
});
