import { Router, Request, Response } from "express";
import { CategoriaService } from "service/categoria.service";

export const categoriaRoutes = Router();

categoriaRoutes.post("/", async (req: Request, res: Response): Promise<Response> => {
  const { nome, preco } = req.body;

  await CategoriaService.criarCategoria(nome, preco);

  return res.status(201).send();
});

categoriaRoutes.get(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    const categoria = await CategoriaService.buscarCategoriaPorId(Number(id));

    return res.status(200).json(categoria);
  }
);

categoriaRoutes.put("/", async (req: Request, res: Response): Promise<Response> => {
  const { id, nome } = req.body;

  const categoria = await CategoriaService.alterarCategoria(Number(id), nome);

  return res.status(200).json(categoria);
});

categoriaRoutes.delete(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    await CategoriaService.deletarCategoria(Number(id));

    return res.status(200).json();
  }
);