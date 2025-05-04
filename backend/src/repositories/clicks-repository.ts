import { Clicks, FetchClicks } from "@/@types/clicks";

export interface ClicksRepository {
  insert(data: Clicks): Promise<Clicks | null>;
  findMany(): Promise<FetchClicks>;
  deleteAll(): Promise<Clicks[] | null>;
}
