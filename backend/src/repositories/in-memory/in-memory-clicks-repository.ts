import { Clicks } from "@/@types/clicks";
import { ClicksRepository } from "../clicks-repository";
import { randomUUID } from "node:crypto";

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

  async create(data: Clicks) {
    const clicks = {
      id: randomUUID(),
      timestamp: new Date(),
      name: data.name,
      timeBetweenClicks: data.timeBetweenClicks,
    };

    this.items.push(clicks);

    return clicks;
  }
}
