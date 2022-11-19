import { Router } from "express";
import { especieRoutes } from "../controller/especieController";
import { pagCartao } from "../controller/pagCartaoController";
import { racaRoutes } from "../controller/racaController";
import { petRoutes } from "../controller/petController";

const router = Router();

router.use("/raca", racaRoutes);
router.use("/especie", especieRoutes);
router.use("/pet", petRoutes);
router.use("/pag-cartao", pagCartao);

router.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

export { router };
