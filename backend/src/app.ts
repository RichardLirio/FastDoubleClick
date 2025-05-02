import fastify from "fastify";
import { clicksRoutes } from "./http/controllers/clicks/routes";

export const app = fastify(); // Criando nossa aplicação backend

app.register(clicksRoutes);
