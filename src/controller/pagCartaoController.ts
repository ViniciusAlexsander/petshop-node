import { Servico } from "entity/Servico";
import { Router, Request, Response } from "express";
import { PagamentoCartaoService } from "service/pagamento-cartao.service";
import { servicoService } from "service/servico.service";

export const pagCartaoRoutes = Router();

pagCartaoRoutes.post(
  "/",
  async (req: Request, res: Response): Promise<Response> => {
    try {
      const { parcelas, situacao, servicoId } = req.body;

      const servico: Servico = await servicoService.buscarServicoId(servicoId);
      console.log('====================================================================')
      console.log(servico)
      if (!servico) throw new Error("Serviço não encontrado");

      if (servico.pagCartao || servico.pagDinheiro)
        throw new Error("Pagamento já cadastrado");

      await PagamentoCartaoService.criarPagCartao(
        parcelas,
        situacao,
        servico
      );

      return res.status(201).send();
    } catch (error) {
      return res.status(500).send("Error:" + error.message);
    }
  }
);

pagCartaoRoutes.get(
  "/",
  async (req: Request, res: Response): Promise<Response> => {
    try {
      const pagCartao = await PagamentoCartaoService.find();

      return res.status(200).json(pagCartao);
    } catch (error) {
      return res.status(500).send("Error:" + error.message);
    }
  }
);

pagCartaoRoutes.get(
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

pagCartaoRoutes.put(
  "/",
  async (req: Request, res: Response): Promise<Response> => {
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
  }
);

pagCartaoRoutes.delete(
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
