import { Router, Request, Response } from "express";
import { ClienteService } from "service/cliente.service";

export const clienteRoutes = Router();

clienteRoutes.post("/", async (req: Request, res: Response): Promise<Response> => {
  const { nome, email, codNac, tipo } = req.body;

  console.log(nome);
  console.log(email);
  console.log(codNac);
  console.log(tipo);


  await ClienteService.criarCliente(nome, email, codNac, tipo);

  return res.status(201).send();
});

clienteRoutes.get(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    const cliente = await ClienteService.buscarClientePorId(Number(id));

    return res.status(200).json(cliente);
  }
);

clienteRoutes.put("/", async (req: Request, res: Response): Promise<Response> => {
  const { id, nome, email, codNac, tipo } = req.body;

  const cliente = await ClienteService.alterarCliente(Number(id), nome, email, codNac, tipo);

  return res.status(200).json(cliente);
});

clienteRoutes.delete(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    await ClienteService.deletarCliente(Number(id));

    return res.status(200).json();
  }
);