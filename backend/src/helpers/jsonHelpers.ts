import { Clicks } from "@/@types/clicks";
import fs from "node:fs/promises";

//classe utilizada para manipular o arquivo json que será usado como banco de dados
export class JsonHelpers {
  public filePath: string = "./src/data/data.json";

  public async write(data: any): Promise<any> {
    try {
      await fs.writeFile(this.filePath, JSON.stringify(data, null, 2), "utf-8");
      return true;
    } catch (error) {
      console.error("🚀 ~ JsonHelpers ~ write ~ error:", error);
      return null;
    }
  }

  public async insert(newClick: Clicks): Promise<Clicks | null> {
    try {
      const data = await this.read();
      if (!data) {
        return null;
      }
      data.push(newClick);
      await this.write(data);
      return newClick;
    } catch (error) {
      console.error("🚀 ~ JsonHelpers ~ update ~ error:", error);
      return null;
    }
  }

  public async read(): Promise<Clicks[] | null> {
    try {
      const data = JSON.parse(await fs.readFile(this.filePath, "utf-8"));
      return data;
    } catch (error) {
      console.error("🚀 ~ JsonHelpers ~ read ~ error:", error);
      return null;
    }
  }

  public async delete(): Promise<any> {
    try {
      await this.write([]);
      return true;
    } catch (error) {
      console.error("🚀 ~ JsonHelpers ~ delete ~ error:", error);
      return null;
    }
  }
}
