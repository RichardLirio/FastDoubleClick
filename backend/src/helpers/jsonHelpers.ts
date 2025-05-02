import fs from "node:fs/promises";

//clase utilizada para manipular o arquivo json que será usado como banco de dados
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

  public async read(): Promise<any> {
    try {
      const data = JSON.parse(await fs.readFile(this.filePath, "utf-8"));
      return data;
    } catch (error) {
      console.error("🚀 ~ JsonHelpers ~ read ~ error:", error);
      return null;
    }
  }

  public async update(newData: any): Promise<any> {
    try {
      const data = await this.read();
      if (data) {
        const result = [...data, ...newData];
        await this.write(result);
        return result;
      }
    } catch (error) {
      console.error("🚀 ~ JsonHelpers ~ update ~ error:", error);
      return false;
    }
  }

  public async delete(): Promise<any> {
    try {
      await fs.unlink(this.filePath);
    } catch (error) {
      console.error("🚀 ~ JsonHelpers ~ delete ~ error:", error);
      return false;
    }
  }
}
