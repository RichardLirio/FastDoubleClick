import { Clicks } from "@/@types/clicks";
import { ClicksRepository } from "../clicks-repository";
import { JsonHelpers } from "@/helpers/jsonHelpers";

export class JsonFileClicksRepository implements ClicksRepository {
  //repositorio utilizado para salvar no arquivo json
  public jsonHelper: JsonHelpers = new JsonHelpers();

  async findMany(page: number) {
    const data = await this.jsonHelper.read();
    if (!data) {
      return [];
    }

    const listaOrdenada = data.sort((a, b) => {
      return a.timeBetweenClicks - b.timeBetweenClicks;
    }); //ordeno a lista com os menores tempos primeiro
    return listaOrdenada.slice((page - 1) * 20, page * 20); //retorna somente 20 itens por pagina
  }

  async insert(data: Clicks) {
    const result = await this.jsonHelper.insert(data);
    if (!result) {
      return null;
    }
    return result;
  }

  async deleteAll() {
    const result = await this.jsonHelper.delete();
    if (!result) {
      return null;
    }
    return result;
  }
}
