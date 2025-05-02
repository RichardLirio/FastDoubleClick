import { z } from "zod";
import "dotenv/config";

const envSchema = z.object({
  NODE_ENV: z.enum(["dev", "test", "production"]),
  PORT: z.coerce.number().default(3333),
}); // schema do .env

const parsedEnv = envSchema.safeParse(process.env); // validando as variaveis

if (!parsedEnv.success) {
  //realiza a verificação das variaveis e lança um erro em caso de não validação
  console.error(
    "Invalid enviroment variables.",
    parsedEnv.error.flatten().fieldErrors
  );

  throw new Error("Invalid enviroment variables.");
}

export const env = parsedEnv.data;
