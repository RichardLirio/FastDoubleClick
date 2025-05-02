import { Clicks } from "@/@types/clicks";
import { ClicksRepository } from "../clicks-repository";

export class InMemoryClicksRepository implements ClicksRepository {
  public items: Clicks[] = [];

  //   async searchMany(query: string, page: number) {
  //     return this.items
  //       .filter((item) => item.title.includes(query))
  //       .slice((page - 1) * 20, page * 20);
  //   }

  //   async findById(id: string): Promise<Gym | null> {
  //     const gym = this.items.find((item) => item.id === id);

  //     if (!gym) {
  //       return null;
  //     }

  //     return gym;
  //   }

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
