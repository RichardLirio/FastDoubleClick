import { Clicks } from "@/@types/clicks";
import { ClicksRepository } from "../clicks-repository";

export class InMemoryClicksRepository implements ClicksRepository {
  public items: Clicks[] = [];

  async findMany(page: number) {
    const listaOrdenada = this.items.sort((a, b) => {
      return a.timeBetweenClicks - b.timeBetweenClicks;
    }); //ordeno a lista com os menores tempos primeiro
    const Clicks = listaOrdenada.slice((page - 1) * 10, page * 10); //retorna somente 10 itens por pagina
    const count = this.items.length;
    return { Clicks, count };
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

  async deleteAll() {
    this.items = [];
    if (this.items.length > 1) {
      return null;
    }
    return this.items;
  }
}
