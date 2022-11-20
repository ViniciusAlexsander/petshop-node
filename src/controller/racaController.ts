import { Router, Request, Response } from "express";
import { RacaService } from "service/raca.service";

export const racaRoutes = Router();

racaRoutes.post("/", async (req: Request, res: Response): Promise<Response> => {
  const { descricao } = req.body;

  await RacaService.criarRaca(descricao);

  return res.status(201).send();
});

racaRoutes.get(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    const raca = await RacaService.buscarRacaPorId(Number(id));

    return res.status(200).json(raca);
  }
);

racaRoutes.put("/", async (req: Request, res: Response): Promise<Response> => {
  const { id, descricao } = req.body;

  const raca = await RacaService.alterarRaca(Number(id), descricao);

  return res.status(200).json(raca);
});

racaRoutes.delete(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    await RacaService.deletarRaca(Number(id));

    return res.status(200).json();
  }
);
