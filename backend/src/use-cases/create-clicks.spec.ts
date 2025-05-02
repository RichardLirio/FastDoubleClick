import { InMemoryClicksRepository } from "../repositories/in-memory/in-memory-clicks-repository";
import { CreateClicksUseCase } from "./create-clicks";
import { beforeEach, describe, expect, it } from "vitest";
import { InsertClickError } from "./error/insertClickError";

let clicksRepository: InMemoryClicksRepository;
let sut: CreateClicksUseCase;
//testes do caso de use de criação de clicks
describe("Create Clicks Use Case", () => {
  beforeEach(() => {
    clicksRepository = new InMemoryClicksRepository();
    sut = new CreateClicksUseCase(clicksRepository);
  });

  it("Está sendo possivel registrar um Click", async () => {
    const { Clicks } = await sut.execute({
      name: "Player1",
      timeBetweenClicks: 350,
    });

    expect(Clicks.id).toEqual(expect.any(String));
    expect(Clicks.name).toEqual("Player1");
  });

  it("Está retornando nulo caso aconteça algum erro ao inserir um Click", async () => {
    await expect(() =>
      sut.execute({
        name: "nullo",
        timeBetweenClicks: 350,
      })
    ).rejects.toBeInstanceOf(InsertClickError);
  });
});
