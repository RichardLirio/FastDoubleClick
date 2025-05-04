import { Clicks, FetchClicks } from "@/@types/clicks";

export interface ClicksRepository {
  insert(data: Clicks): Promise<Clicks | null>;
  findMany(page: number): Promise<FetchClicks>;
  deleteAll(): Promise<Clicks[] | null>;
}
