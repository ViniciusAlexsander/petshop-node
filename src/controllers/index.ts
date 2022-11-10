import { Router } from "express";

const router = Router();

// router.use("/users", userRoutes);

router.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

export { router };
