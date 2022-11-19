import { Router, Request, Response } from "express";
import { FuncionarioService } from "service/funcionario.service";

export const funcionarioRoutes = Router();

funcionarioRoutes.post("/", async (req: Request, res: Response): Promise<Response> => {
  const { nome, email, codNac, funcao } = req.body;

  console.log(nome);
  console.log(email);
  console.log(codNac);
  console.log(funcao);


  await FuncionarioService.criarFuncionario(nome, email, codNac, funcao);

  return res.status(201).send();
});

funcionarioRoutes.get(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    const funcionario = await FuncionarioService.buscarFuncionarioPorId(Number(id));

    return res.status(200).json(funcionario);
  }
);

funcionarioRoutes.put("/", async (req: Request, res: Response): Promise<Response> => {
  const { id, descricao } = req.body;

  const funcionario = await FuncionarioService.alterarFuncionario(Number(id), descricao);

  return res.status(200).json(funcionario);
});

funcionarioRoutes.delete(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    await FuncionarioService.deletarFuncionario(Number(id));

    return res.status(200).json();
  }
);