import { Router } from "express";
import { racaRoutes } from "./racaController";

const router = Router();

router.use("/raca", racaRoutes);

router.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

export { router };
