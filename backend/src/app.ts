import fastify from "fastify";
import { clicksRoutes } from "./http/controllers/clicks/routes";
import fastifyCors from "@fastify/cors";

export const app = fastify(); // Criando nossa aplicação backend

app.register(fastifyCors, {
  origin: true,
  credentials: true,
});

app.register(clicksRoutes);
