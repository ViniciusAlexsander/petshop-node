import { Router } from "express";
import { especieRoutes } from "./especieController";
import { petRoutes } from "./petController";
import { racaRoutes } from "./racaController";

const router = Router();

router.use("/raca", racaRoutes);
router.use("/especie", especieRoutes);
router.use("/pet", petRoutes);

router.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

export { router };
