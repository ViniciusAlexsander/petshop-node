import { Router, Request, Response } from "express";
import { EspecieService } from "service/especie.service";
import { PetService } from "service/pet.service";
import { RelatorioService } from "service/relatorio.service";

export const relatorioRoutes = Router();

relatorioRoutes.get(
  "/servicos",
  async (req: Request, res: Response): Promise<Response> => {
    const { dataInicial, dataFinal } = req.query;

    const relatorio = await RelatorioService.solicitarRelatorio(
      new Date(dataInicial?.toString()),
      new Date(dataFinal?.toString())
    );

    return res.status(200).json(relatorio);
  }
);
