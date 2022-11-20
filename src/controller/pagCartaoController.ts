import { Router, Request, Response } from "express";
import { PagamentoCartaoService } from "service/pagamento-cartao.service";

export const pagCartao = Router();

pagCartao.post("/", async (req: Request, res: Response): Promise<Response> => {
  try {
    const { parcelas, situacao, servicoId } = req.body;

    await PagamentoCartaoService.criarPagCartao(parcelas, situacao, servicoId);

    return res.status(201).send();
  } catch (error) {
    return res.status(500).send("Error:" + error.message);
  }
});

pagCartao.get("/", async (req: Request, res: Response): Promise<Response> => {
  try {
    const pagCartao = await PagamentoCartaoService.find();

    return res.status(200).json(pagCartao);
  } catch (error) {
    return res.status(500).send("Error:" + error.message);
  }
});

pagCartao.get(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const pagCartao = await PagamentoCartaoService.buscarPagCartaoPorId(
        Number(id)
      );

      return res.status(200).json(pagCartao);
    } catch (error) {
      return res.status(500).send("Error:" + error.message);
    }
  }
);

pagCartao.put("/", async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id, parcelas, situacao } = req.body;

    const pagCartao = await PagamentoCartaoService.alterarPagCartao(
      Number(id),
      parcelas,
      situacao
    );

    return res.status(200).json(pagCartao);
  } catch (error) {
    return res.status(500).send("Error:" + error.message);
  }
});

pagCartao.delete(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;

      await PagamentoCartaoService.deletarPagCartao(Number(id));

      return res.status(200).json();
    } catch (error) {
      return res.status(500).send("Error:" + error.message);
    }
  }
);
