import { FastifyInstance } from "fastify";
import { create } from "./create";

export async function clicksRoutes(app: FastifyInstance) {
  app.post("/clicks", create);
}
