import { afterAll, beforeEach, describe, expect, it } from "vitest";
import { JsonHelpers } from "./jsonHelpers";
import { randomUUID } from "crypto";

let sut: JsonHelpers;
//testes da manipulação do arquivo json
describe("CRUD JSON HELPER", () => {
  beforeEach(async () => {
    sut = new JsonHelpers();
    await sut.delete();
  });

  afterAll(async () => {
    await sut.delete();
  });

  it("Está sendo possivel inserir um click dentor do json", async () => {
    await sut.insert({
      id: randomUUID(),
      name: "Player1",
      timestamp: new Date().toLocaleString("pt-BR", {
        timeZone: "America/Sao_Paulo",
      }),
      timeBetweenClicks: 350,
    });

    const data = await sut.read();

    expect(data).toHaveLength(1);
    expect(data).toEqual([expect.objectContaining({ name: "Player1" })]);
  });

  it("Está sendo possivel inserir um click dentor do json sem afetar os dados existentes", async () => {
    await sut.insert({
      id: randomUUID(),
      name: "Player1",
      timestamp: new Date().toLocaleString("pt-BR", {
        timeZone: "America/Sao_Paulo",
      }),
      timeBetweenClicks: 350,
    });

    await sut.insert({
      id: randomUUID(),
      name: "Player2",
      timestamp: new Date().toLocaleString("pt-BR", {
        timeZone: "America/Sao_Paulo",
      }),
      timeBetweenClicks: 120,
    });

    const data = await sut.read();

    expect(data).toHaveLength(2);
    expect(data).toEqual([
      expect.objectContaining({ name: "Player1" }),
      expect.objectContaining({ name: "Player2" }),
    ]);
  });
});
