import { Router } from "express";
import { especieRoutes } from "../controller/especieController";
import { pagCartaoRoutes } from "../controller/pagCartaoController";
import { racaRoutes } from "../controller/racaController";
import { petRoutes } from "../controller/petController";
import { pagDinheiroRoutes } from "controller/pagDinheiroController";
import { pessoaRoutes } from "controller/pessoaController";
import { servicoRoutes } from "controller/servicoController";

const router = Router();

router.use("/pessoa", pessoaRoutes);
router.use("/endereco", pessoaRoutes);
router.use("/cidade", pessoaRoutes);
router.use("/estado", pessoaRoutes);
router.use("/raca", racaRoutes);
router.use("/especie", especieRoutes);
router.use("/pet", petRoutes);
router.use("/pag-cartao", pagCartaoRoutes);
router.use("/pag-dinheiro", pagDinheiroRoutes);
router.use("/servico", servicoRoutes);

router.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

export { router };
