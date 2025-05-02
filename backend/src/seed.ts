import fs from "node:fs/promises";
import { JsonHelpers } from "./helpers/jsonHelpers";

//funçao criada para verificar se o arquivo json usado como db existe
export async function FileExist(file: string) {
  const jsonHelpers = new JsonHelpers();
  try {
    await fs.access(file, fs.constants.F_OK);
  } catch (error) {
    await fs.mkdir("./src/data"); //cria pasta data caso não exista
    const saveFile = await jsonHelpers.write([]); //cria o arquivo json usado como banco de dados
    if (!saveFile) {
      throw new Error("Erro ao criar o arquivo Json.");
    } else {
      console.log("Arquivo Json Criado com sucesso.");
    }
  }
}
