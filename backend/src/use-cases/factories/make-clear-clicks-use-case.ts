import { JsonFileClicksRepository } from "@/repositories/jsonFile/jsonFile-clicks-repository";
import { ClearClicksUseCase } from "../clear-clicks";

export function makeClearClicksUseCase() {
  const ClicksRepository = new JsonFileClicksRepository(); //crio o repository que será usado na classe do use case
  const useCase = new ClearClicksUseCase(ClicksRepository); //instacio o use case com o repository

  return useCase;
}
