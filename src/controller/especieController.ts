import { Router, Request, Response } from "express";
import { EspecieService } from "service/especie.service";

export const especieRoutes = Router();

especieRoutes.post(
  "/",
  async (req: Request, res: Response): Promise<Response> => {
    const { descricao } = req.body;

    console.log(descricao);

    await EspecieService.criarEspecie(descricao);

    return res.status(201).send();
  }
);

especieRoutes.get(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    const raca = await EspecieService.buscarEspeciePorId(Number(id));

    return res.status(200).json(raca);
  }
);

especieRoutes.put(
  "/",
  async (req: Request, res: Response): Promise<Response> => {
    const { id, descricao } = req.body;

    const raca = await EspecieService.alterarEspecie(Number(id), descricao);

    return res.status(200).json(raca);
  }
);

especieRoutes.delete(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    await EspecieService.deletarEspecie(Number(id));

    return res.status(200).json();
  }
);
