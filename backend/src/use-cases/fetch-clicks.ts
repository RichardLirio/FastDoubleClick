import { Clicks } from "@/@types/clicks";
import { ClicksRepository } from "@/repositories/clicks-repository";

interface FetchClicksUseCaseParams {
  page: number;
} //parametros que serão entregues ao caso de uso para busca de clicks

interface FetchClicksUseCaseResponse {
  Clicks: Clicks[];
  count: number;
} //reposta retorna a lista de clicks

export class FetchClicksUseCase {
  //classe criada para o caso de uso
  constructor(private ClicksRepository: ClicksRepository) {} //repositorio que será utilizado no caso de uso

  async execute({
    //metodo execute, utilizado para executar o caso de uso
    page,
  }: FetchClicksUseCaseParams): Promise<FetchClicksUseCaseResponse> {
    const { Clicks, count } = await this.ClicksRepository.findMany(page);

    return {
      Clicks,
      count,
    };
  }
}
