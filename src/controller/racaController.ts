import { Router, Request, Response } from "express";
import { RacaService } from "service/raca.service";

export const racaRoutes = Router();

racaRoutes.post("/", async (req: Request, res: Response): Promise<Response> => {
  const { descricao } = req.body;

  console.log(descricao);

  await RacaService.criarRaca(descricao);

  return res.status(201).send();
});
