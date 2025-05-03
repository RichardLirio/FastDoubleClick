import { InMemoryClicksRepository } from "../repositories/in-memory/in-memory-clicks-repository";
import { beforeEach, describe, expect, it } from "vitest";
import { ClearClicksUseCase } from "./clear-clicks";
import { randomUUID } from "node:crypto";

let clicksRepository: InMemoryClicksRepository;
let sut: ClearClicksUseCase;

describe("Clear Clicks Use Case", () => {
  //Seta antes de cada teste o repositorio utilizado e o caso de uso a ser testado
  beforeEach(async () => {
    clicksRepository = new InMemoryClicksRepository();
    sut = new ClearClicksUseCase(clicksRepository);
  });

  it("Está sendo possivel deletar a lista de clicks", async () => {
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
      timeBetweenClicks: 360,
    });

    const { Clicks } = await sut.execute();

    expect(Clicks).toHaveLength(0);
  });
});
