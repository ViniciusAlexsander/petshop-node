import { Router } from "express";
import { especieRoutes } from "../controller/especieController";
import { pagCartao } from "../controller/pagCartaoController";
import { racaRoutes } from "../controller/racaController";
import { petRoutes } from "../controller/petController";
import { pagDinheiro } from "controller/pagDinheiroController";

const router = Router();

router.use("/raca", racaRoutes);
router.use("/especie", especieRoutes);
router.use("/pet", petRoutes);
router.use("/pag-cartao", pagCartao);
router.use("/pag-dinheiro", pagDinheiro);

router.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

export { router };
