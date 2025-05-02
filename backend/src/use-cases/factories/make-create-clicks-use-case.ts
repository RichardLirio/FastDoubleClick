import { JsonFileClicksRepository } from "@/repositories/jsonFile/jsonFile-clicks-repository";
import { CreateClicksUseCase } from "../create-clicks";

export function makeCreateClicksUseCase() {
  const ClicksRepository = new JsonFileClicksRepository(); //crio o repository que será usado na classe do use case
  const useCase = new CreateClicksUseCase(ClicksRepository); //instacio o use case com o repository

  return useCase;
}
