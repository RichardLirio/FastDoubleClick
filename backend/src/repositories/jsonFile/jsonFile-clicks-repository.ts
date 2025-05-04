import { Clicks } from "@/@types/clicks";
import { ClicksRepository } from "../clicks-repository";
import { JsonHelpers } from "@/helpers/jsonHelpers";

export class JsonFileClicksRepository implements ClicksRepository {
  //repositorio utilizado para salvar no arquivo json
  public jsonHelper: JsonHelpers = new JsonHelpers();

  public filePath: string = "./src/data/data.json";

  async findMany(page: number) {
    const data = await this.jsonHelper.read(this.filePath);
    if (!data) {
      return { Clicks: [], count: 0 };
    }

    const listaOrdenada = data.sort((a, b) => {
      return a.timeBetweenClicks - b.timeBetweenClicks;
    }); //ordeno a lista com os menores tempos primeiro

    const Clicks = listaOrdenada.slice((page - 1) * 10, page * 10); //retorna somente 10 itens por pagina
    const count = listaOrdenada.length;
    return { Clicks, count };
  }

  async insert(data: Clicks) {
    const result = await this.jsonHelper.insert(data, this.filePath);
    if (!result) {
      return null;
    }
    return result;
  }

  async deleteAll() {
    const result = await this.jsonHelper.delete(this.filePath);
    if (!result) {
      return null;
    }
    return result;
  }
}
