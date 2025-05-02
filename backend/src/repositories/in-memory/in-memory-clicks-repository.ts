import { Clicks } from "@/@types/clicks";
import { ClicksRepository } from "../clicks-repository";

export class InMemoryClicksRepository implements ClicksRepository {
  public items: Clicks[] = [];

  async findMany(page: number) {
    const listaOrdenada = this.items.sort((a, b) => {
      return a.timeBetweenClicks - b.timeBetweenClicks;
    }); //ordeno a lista com os menores tempos primeiro
    return listaOrdenada.slice((page - 1) * 20, page * 20); //retorna somente 20 itens por pagina
  }

  async insert(data: Clicks) {
    const clicks = {
      id: data.id,
      timestamp: new Date().toLocaleString("pt-BR", {
        timeZone: "America/Sao_Paulo",
      }),
      name: data.name,
      timeBetweenClicks: data.timeBetweenClicks,
    };

    if (data.name === "nullo") {
      return null;
    }

    this.items.push(clicks);

    return clicks;
  }
}
