import { Clicks } from "@/@types/clicks";
import { ClicksRepository } from "@/repositories/clicks-repository";

interface FetchClicksUseCaseResponse {
  Clicks: Clicks[];
  count: number;
} //reposta retorna a lista de clicks

export class FetchClicksUseCase {
  //classe criada para o caso de uso
  constructor(private ClicksRepository: ClicksRepository) {} //repositorio que será utilizado no caso de uso

  async execute(): Promise<FetchClicksUseCaseResponse> {
    const { Clicks, count } = await this.ClicksRepository.findMany();

    return {
      Clicks,
      count,
    };
  }
}
