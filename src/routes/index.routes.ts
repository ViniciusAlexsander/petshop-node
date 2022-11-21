import { Router } from "express";
import { especieRoutes } from "../controller/especieController";
import { pagCartao } from "../controller/pagCartaoController";
import { racaRoutes } from "../controller/racaController";
import { petRoutes } from "../controller/petController";
import { pagDinheiro } from "controller/pagDinheiroController";
import { pessoaRoutes } from "controller/pessoaController";
import { cidadeRoutes } from "controller/cidadeController";
import { enderecoRoutes } from "controller/enderecoController";
import { estadoRoutes } from "controller/estadoController";
import { pessoaTelefoneRoutes } from "controller/pessoaTelefoneController";
import { pessoaEnderecoRoutes } from "controller/pessoaEnderecoController";

const router = Router();

router.use("/pessoa", pessoaRoutes);
router.use("/pessoa/telefone", pessoaTelefoneRoutes);
router.use("/pessoa/endereco", pessoaEnderecoRoutes);
router.use("/endereco", enderecoRoutes);
router.use("/cidade", cidadeRoutes);
router.use("/estado", estadoRoutes);
router.use("/raca", racaRoutes);
router.use("/especie", especieRoutes);
router.use("/pet", petRoutes);
router.use("/pag-cartao", pagCartao);
router.use("/pag-dinheiro", pagDinheiro);

router.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

export { router };
