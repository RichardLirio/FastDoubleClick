import { Clicks } from "@/@types/clicks";
import { ClicksRepository } from "@/repositories/clicks-repository";

interface CreateClicksUseCaseParams {
  timestamp: Date;
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
    timestamp,
    name,
    timeBetweenClicks,
  }: CreateClicksUseCaseParams): Promise<CreateClicksUseCaseResponse> {
    const Clicks = await this.ClicksRepository.create({
      //metodo do repositorio para criação de clicks
      timestamp,
      name,
      timeBetweenClicks,
    });

    return {
      Clicks,
    };
  }
}
