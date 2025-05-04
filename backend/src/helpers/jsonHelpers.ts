import { Clicks } from "@/@types/clicks";
import fs from "node:fs/promises";

//classe utilizada para manipular o arquivo json que será usado como banco de dados
export class JsonHelpers {
  //public filePath: string = "./src/data/data.json";

  public async write(data: any, filePath: string): Promise<any> {
    try {
      await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
      return true;
    } catch (error) {
      console.error("🚀 ~ JsonHelpers ~ write ~ error:", error);
      return null;
    }
  }

  public async insert(
    newClick: Clicks,
    filePath: string
  ): Promise<Clicks | null> {
    try {
      const data = await this.read(filePath);
      if (!data) {
        return null;
      }
      data.push(newClick);
      await this.write(data, filePath);
      return newClick;
    } catch (error) {
      console.error("🚀 ~ JsonHelpers ~ update ~ error:", error);
      return null;
    }
  }

  public async read(filePath: string): Promise<Clicks[] | null> {
    try {
      const data = JSON.parse(await fs.readFile(filePath, "utf-8"));
      return data;
    } catch (error) {
      console.error("🚀 ~ JsonHelpers ~ read ~ error:", error);
      return null;
    }
  }

  public async delete(filePath: string): Promise<Clicks[] | null> {
    try {
      await this.write([], filePath);
      const data = await this.read(filePath);
      if (!data) {
        return null;
      }
      return data;
    } catch (error) {
      console.error("🚀 ~ JsonHelpers ~ delete ~ error:", error);
      return null;
    }
  }
}
