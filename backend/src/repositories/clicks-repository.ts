import { Clicks, ClicksInputData } from "@/@types/clicks";

export interface ClicksRepository {
  create(data: ClicksInputData): Promise<Clicks>;
}
