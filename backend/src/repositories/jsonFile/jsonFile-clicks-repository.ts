import { Clicks } from "@/@types/clicks";
import { ClicksRepository } from "../clicks-repository";
import { JsonHelpers } from "@/helpers/jsonHelpers";

export class JsonFileClicksRepository implements ClicksRepository {
  public jsonHelper: JsonHelpers = new JsonHelpers();
  async insert(data: Clicks) {
    const result = await this.jsonHelper.insert(data);
    if (!result) {
      return null;
    }
    return result;
  }
}
