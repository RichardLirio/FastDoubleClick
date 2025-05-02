import { Clicks } from "@/@types/clicks";
import { ClicksRepository } from "@/repositories/clicks-repository";
import { randomUUID } from "node:crypto";
import { InsertClickError } from "./error/insertClickError";

interface CreateClicksUseCaseParams {
  name: string;
  timeBetweenClicks: number;
} //parametros que serão entregues ao caso de uso para registro de clicks

interface CreateClicksUseCaseResponse {
  Clicks: Clicks;
} //reposta retorna o objeto clicks criado

export class CreateClicksUseCase {
  //classe criada para o caso de uso
  constructor(private ClicksRepository: ClicksRepository) {} //repositorio que será utilizado no caso de uso

  async execute({
    //metodo execute, utilizado para executar o caso de uso
    name,
    timeBetweenClicks,
  }: CreateClicksUseCaseParams): Promise<CreateClicksUseCaseResponse> {
    const Clicks = await this.ClicksRepository.insert({
      //metodo do repositorio para criação de clicks
      id: randomUUID(),
      timestamp: new Date().toLocaleString("pt-BR", {
        timeZone: "America/Sao_Paulo",
      }),
      name,
      timeBetweenClicks,
    });

    if (!Clicks) {
      throw new InsertClickError();
    }

    return {
      Clicks,
    };
  }
}
