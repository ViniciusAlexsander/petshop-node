import { Router, Request, Response } from "express";
import { servicoService } from "service/servico.service";

export const servicoRoutes = Router();

servicoRoutes.post("/", async (req: Request, res: Response): Promise<Response> => {
  const { dataEntrada,dataSaida, descricao, pet } = req.body;

  await servicoService.criarServico(dataEntrada, dataSaida, descricao);

  return res.status(201).send();
});


servicoRoutes.post("/:idServico/:idPet", async (req: Request, res: Response): Promise<Response> => {
  const { idServico,idPet} = req.params;

  await servicoService.adicionarServicoPet(+idServico,+idPet);

  return res.status(201).send();
});

servicoRoutes.get(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    const servico = await servicoService.buscarServicoId(Number(id));

    return res.status(200).json(servico);
  }
);

servicoRoutes.get(
  "/",
  async (req: Request, res: Response): Promise<Response> => {
    const servico = await servicoService.buscarServicos();

    return res.status(200).json(servico);
  }
);

servicoRoutes.put("/", async (req: Request, res: Response): Promise<Response> => {
  const { id, dataEntrada,dataSaida, descricao } = req.body;

  const servico = await servicoService.alterarServico(Number(id),dataEntrada,dataSaida,descricao );

  return res.status(200).json(servico);
});

servicoRoutes.delete(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    await servicoService.deletarServico(Number(id));

    return res.status(200).json();
  }
);
