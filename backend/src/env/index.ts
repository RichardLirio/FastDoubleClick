import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["dev", "production", "test"]).default("dev"),
  PORT: z.number().default(3333),
}); //Esquema das variaveis de ambientes

const parsedEnv = envSchema.safeParse(process.env); // valida as variaveis de ambiente

if (!parsedEnv.success) {
  console.error(
    "Invalid enviroment variables.",
    parsedEnv.error.flatten().fieldErrors // achata e mostra de maneira mais clara os erros no console
  );

  throw new Error("Invalid enviroment variables."); // Dispara o erro de variaveis invalidas
}
