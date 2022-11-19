import { Router } from "express";
import { especieRoutes } from "./especieController";
import { pagCartao } from "./pagCartaoController";
import { pagDinheiro } from "./pagDinheiroController";
import { petRoutes } from "./petController";
import { racaRoutes } from "./racaController";

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
