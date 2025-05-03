import { Clicks } from "@/@types/clicks";
import { ClicksRepository } from "@/repositories/clicks-repository";
import { ClearClicksError } from "./error/clear-clicks-error";

interface ClearClicksUseCaseResponse {
  Clicks: Clicks[];
} //reposta retorna a lista de clicks

export class ClearClicksUseCase {
  //classe criada para o caso de uso
  constructor(private ClicksRepository: ClicksRepository) {} //repositorio que será utilizado no caso de uso

  async execute(): //metodo execute, utilizado para executar o caso de uso
  Promise<ClearClicksUseCaseResponse> {
    const Clicks = await this.ClicksRepository.deleteAll();

    if (!Clicks) {
      throw new ClearClicksError();
    }

    return {
      Clicks,
    };
  }
}
