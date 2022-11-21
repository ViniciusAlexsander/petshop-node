import { Servico } from "entity/Servico";
import { Router, Request, Response } from "express";
import { PagamentoDinheiroService } from "service/pagamento-dinheiro.service";
import { servicoService } from "service/servico.service";

export const pagDinheiroRoutes = Router();

pagDinheiroRoutes.post(
  "/",
  async (req: Request, res: Response): Promise<Response> => {
    try {
      const { dataVencimento, dataPagamento, situacao, servicoId } = req.body;

      const servico: Servico = await servicoService.buscarServicoId(servicoId);

      if (!servico) throw new Error("Serviço não encontrado");
      if (servico.pagCartao || servico.pagDinheiro)
        throw new Error("Pagamento já cadastrado");

      await PagamentoDinheiroService.criarPagDinheiro(
        dataVencimento,
        dataPagamento,
        situacao,
        servico
      );

      return res.status(201).send();
    } catch (error) {
      return res.status(500).send("Error:" + error.message);
    }
  }
);

pagDinheiroRoutes.get(
  "/",
  async (req: Request, res: Response): Promise<Response> => {
    try {
      const pagDinheiro = await PagamentoDinheiroService.find();

      return res.status(200).json(pagDinheiro);
    } catch (error) {
      return res.status(500).send("Error:" + error.message);
    }
  }
);

pagDinheiroRoutes.get(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;

      const pagDinheiro = await PagamentoDinheiroService.buscarPagDinheiroPorId(
        Number(id)
      );

      return res.status(200).json(pagDinheiro);
    } catch (error) {
      return res.status(500).send("Error:" + error.message);
    }
  }
);

pagDinheiroRoutes.put(
  "/",
  async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id, dataVencimento, dataPagamento, situacao } = req.body;

      const pagDinheiro = await PagamentoDinheiroService.alterarPagDinheiro(
        Number(id),
        dataVencimento,
        dataPagamento,
        situacao
      );

      return res.status(200).json(pagDinheiro);
    } catch (error) {
      return res.status(500).send("Error:" + error.message);
    }
  }
);

pagDinheiroRoutes.delete(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;

      await PagamentoDinheiroService.deletarPagDinheiro(Number(id));

      return res.status(200).json();
    } catch (error) {
      return res.status(500).send("Error:" + error.message);
    }
  }
);
