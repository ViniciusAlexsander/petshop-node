import { Router } from "express";
import { especieRoutes } from "../controller/especieController";
import { pagCartaoRoutes } from "../controller/pagCartaoController";
import { racaRoutes } from "../controller/racaController";
import { petRoutes } from "../controller/petController";
import { pagDinheiroRoutes } from "controller/pagDinheiroController";
import { pessoaRoutes } from "controller/pessoaController";
import { cidadeRoutes } from "controller/cidadeController";
import { enderecoRoutes } from "controller/enderecoController";
import { estadoRoutes } from "controller/estadoController";
import { pessoaTelefoneRoutes } from "controller/pessoaTelefoneController";
import { pessoaEnderecoRoutes } from "controller/pessoaEnderecoController";
import { relatorioRoutes } from "controller/relatorioController";
import { servicoRoutes } from "controller/servicoController";

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
router.use("/pag-cartao", pagCartaoRoutes);
router.use("/pag-dinheiro", pagDinheiroRoutes);
router.use("/servico", servicoRoutes);
router.use("/relatorio", relatorioRoutes);

router.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

export { router };
