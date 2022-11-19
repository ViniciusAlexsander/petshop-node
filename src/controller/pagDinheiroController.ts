import { Router, Request, Response } from "express";
import { PagamentoDinheiroService } from "service/pagamento-dinheiro.service";

export const pagDinheiro = Router();

pagDinheiro.post(
  "/",
  async (req: Request, res: Response): Promise<Response> => {
    const { dataVencimento, dataPagamento, situacao, servicoId } = req.body;

    await PagamentoDinheiroService.criarPagDinheiro(
      dataVencimento,
      dataPagamento,
      situacao,
      servicoId
    );

    return res.status(201).send();
  }
);

pagDinheiro.get("/", async (req: Request, res: Response): Promise<Response> => {
  const pagDinheiro = await PagamentoDinheiroService.find();

  return res.status(200).json(pagDinheiro);
});

pagDinheiro.get(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    const pagDinheiro = await PagamentoDinheiroService.buscarPagDinheiroPorId(
      Number(id)
    );

    return res.status(200).json(pagDinheiro);
  }
);

pagDinheiro.put("/", async (req: Request, res: Response): Promise<Response> => {
  const { id, dataVencimento, dataPagamento, situacao } = req.body;

  const pagDinheiro = await PagamentoDinheiroService.alterarPagDinheiro(
    Number(id),
    dataVencimento,
    dataPagamento,
    situacao
  );

  return res.status(200).json(pagDinheiro);
});

pagDinheiro.delete(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    await PagamentoDinheiroService.deletarPagDinheiro(Number(id));

    return res.status(200).json();
  }
);
