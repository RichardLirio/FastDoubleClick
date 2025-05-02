import { z } from "zod";
import "dotenv/config";

const envSchema = z.object({
  NODE_ENV: z.enum(["dev", "test", "production"]),
  PORT: z.coerce.number().default(3333),
});
const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error(
    "Invalid enviroment variables.",
    parsedEnv.error.flatten().fieldErrors
  );

  throw new Error("Invalid enviroment variables.");
}

export const env = parsedEnv.data;
