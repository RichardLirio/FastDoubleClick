import { InMemoryClicksRepository } from "../repositories/in-memory/in-memory-clicks-repository";
import { beforeEach, describe, expect, it } from "vitest";
import { FetchClicksUseCase } from "./fetch-clicks";
import { randomUUID } from "node:crypto";

let clicksRepository: InMemoryClicksRepository;
let sut: FetchClicksUseCase;

describe("Fetch Clicks Use Case", () => {
  beforeEach(async () => {
    clicksRepository = new InMemoryClicksRepository();
    sut = new FetchClicksUseCase(clicksRepository);
  });

  it("Está sendo possivel obter a lista de clicks", async () => {
    await clicksRepository.insert({
      id: randomUUID(),
      timestamp: new Date().toLocaleString("pt-BR", {
        timeZone: "America/Sao_Paulo",
      }),
      name: "Player1",
      timeBetweenClicks: 350,
    });

    await clicksRepository.insert({
      id: randomUUID(),
      timestamp: new Date().toLocaleString("pt-BR", {
        timeZone: "America/Sao_Paulo",
      }),
      name: "Player2",
      timeBetweenClicks: 99,
    });

    const { Clicks } = await sut.execute({
      page: 1,
    });

    expect(Clicks).toHaveLength(2);
    expect(Clicks).toEqual([
      expect.objectContaining({ name: "Player1" }),
      expect.objectContaining({ name: "Player2" }),
    ]);
  });

  it("Está sendo possivel obter uma lista paginada de Clicks", async () => {
    for (let i = 1; i <= 22; i++) {
      await clicksRepository.insert({
        id: randomUUID(),
        timestamp: new Date().toLocaleString("pt-BR", {
          timeZone: "America/Sao_Paulo",
        }),
        name: `Player${i}`,
        timeBetweenClicks: i + 100,
      });
    }
    const { Clicks } = await sut.execute({
      page: 2,
    });

    expect(Clicks).toHaveLength(2);
    expect(Clicks).toEqual([
      expect.objectContaining({ name: "Player21" }),
      expect.objectContaining({ name: "Player22" }),
    ]);
  });
});
