import { Router, Request, Response } from "express";
import { ProdutoService } from "service/produto.service";

export const produtoRoutes = Router();

produtoRoutes.post(
  "/",
  async (req: Request, res: Response): Promise<Response> => {
    const { nome, preco } = req.body;

    await ProdutoService.criarProduto(nome, preco);

    return res.status(201).send();
  }
);

produtoRoutes.get(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    const produto = await ProdutoService.buscarProdutoPorId(Number(id));

    return res.status(200).json(produto);
  }
);

produtoRoutes.put(
  "/",
  async (req: Request, res: Response): Promise<Response> => {
    const { id, nome, preco } = req.body;

    const produto = await ProdutoService.alterarProduto(
      Number(id),
      nome,
      preco
    );

    return res.status(200).json(produto);
  }
);

produtoRoutes.delete(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    await ProdutoService.deletarProduto(Number(id));

    return res.status(200).json();
  }
);
