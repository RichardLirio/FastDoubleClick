import { FastifyInstance } from "fastify";
import { create } from "./create";
import { fetch } from "./fetch";
import { clear } from "./clear";

export async function clicksRoutes(app: FastifyInstance) {
  //rota de inserção de clicks
  app.post("/clicks", create);

  //rota que busca lista de clicks
  app.get("/clicks", fetch);

  //rota para zerar base de dados
  app.delete("/clicks", clear);
}
