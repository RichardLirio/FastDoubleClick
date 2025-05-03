import { Clicks } from "@/@types/clicks";

export interface ClicksRepository {
  insert(data: Clicks): Promise<Clicks | null>;
  findMany(page: number): Promise<Clicks[]>;
  deleteAll(): Promise<Clicks[] | null>;
}
