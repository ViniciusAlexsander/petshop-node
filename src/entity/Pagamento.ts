import Base from "./Base";
import { Column } from "typeorm";

export abstract class Pagamento extends Base {
  @Column()
  situacao: string;

  constructor(situacao: string) {
    super();
    this.situacao = situacao;
  }
}
