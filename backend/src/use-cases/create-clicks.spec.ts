import { InMemoryClicksRepository } from "../repositories/in-memory/in-memory-clicks-repository";
import { CreateClicksUseCase } from "./create-clicks";
import { beforeEach, describe, expect, it } from "vitest";

let clicksRepository: InMemoryClicksRepository;
let sut: CreateClicksUseCase;

describe("Create Clicks Use Case", () => {
  beforeEach(() => {
    clicksRepository = new InMemoryClicksRepository();
    sut = new CreateClicksUseCase(clicksRepository);
  });

  it("Está sendo possivel registrar um Clicks", async () => {
    const { Clicks } = await sut.execute({
      name: "Player1",
      timestamp: new Date(),
      timeBetweenClicks: 350,
    });

    expect(Clicks.id).toEqual(expect.any(String));
    expect(Clicks.name).toEqual("Player1");
  });
});
