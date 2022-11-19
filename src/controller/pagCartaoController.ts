import { Router, Request, Response } from "express";
import { PagamentoCartaoService } from "service/pagamento-cartao.service";

export const pagCartao = Router();

pagCartao.post("/", async (req: Request, res: Response): Promise<Response> => {
  const { parcelas, situacao, servicoId } = req.body;

  await PagamentoCartaoService.criarPagCartao(parcelas, situacao, servicoId);

  return res.status(201).send();
});

pagCartao.get("/", async (req: Request, res: Response): Promise<Response> => {
  const pagCartao = await PagamentoCartaoService.find();

  return res.status(200).json(pagCartao);
});

pagCartao.get(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    const pagCartao = await PagamentoCartaoService.buscarPagCartaoPorId(
      Number(id)
    );

    return res.status(200).json(pagCartao);
  }
);

pagCartao.put("/", async (req: Request, res: Response): Promise<Response> => {
  const { id, parcelas, situacao } = req.body;

  const pagCartao = await PagamentoCartaoService.alterarPagCartao(
    Number(id),
    parcelas,
    situacao
  );

  return res.status(200).json(pagCartao);
});

pagCartao.delete(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    await PagamentoCartaoService.deletarPagCartao(Number(id));

    return res.status(200).json();
  }
);
