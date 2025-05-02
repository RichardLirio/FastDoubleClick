import { Clicks, ClicksInputData } from "@/@types/clicks";

export interface ClicksRepository {
  insert(data: ClicksInputData): Promise<Clicks>;
}
