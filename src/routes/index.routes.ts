import { Router } from "express";
import { especieRoutes } from "../controller/especieController";
import { pagCartao } from "../controller/pagCartaoController";
import { racaRoutes } from "../controller/racaController";
import { petRoutes } from "../controller/petController";
import { pagDinheiro } from "controller/pagDinheiroController";
import { pessoaRoutes } from "controller/pessoaController";
import { relatorioRoutes } from "controller/relatorioController";

const router = Router();

router.use("/pessoa", pessoaRoutes);
router.use("/endereco", pessoaRoutes);
router.use("/cidade", pessoaRoutes);
router.use("/estado", pessoaRoutes);
router.use("/raca", racaRoutes);
router.use("/especie", especieRoutes);
router.use("/pet", petRoutes);
router.use("/pag-cartao", pagCartao);
router.use("/pag-dinheiro", pagDinheiro);
router.use("/relatorio", relatorioRoutes);

router.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

export { router };
