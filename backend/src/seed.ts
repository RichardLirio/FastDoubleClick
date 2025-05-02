import fs from "node:fs/promises";
import { JsonHelpers } from "./helpers/jsonHelpers";

//funçao criada para verificar se o arquivo json usado como db existe
export async function FileExist(file: string) {
  const jsonHelpers = new JsonHelpers();
  try {
    await fs.access(file, fs.constants.F_OK);
  } catch (error) {
    await jsonHelpers.write([]);
    console.log("Arquivo Json Criado com sucesso.");
  }
}
