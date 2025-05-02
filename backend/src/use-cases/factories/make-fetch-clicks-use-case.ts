import { JsonFileClicksRepository } from "@/repositories/jsonFile/jsonFile-clicks-repository";
import { FetchClicksUseCase } from "../fetch-clicks";

export function makeFetchClicksUseCase() {
  const ClicksRepository = new JsonFileClicksRepository(); //crio o repository que será usado na classe do use case
  const useCase = new FetchClicksUseCase(ClicksRepository); //instacio o use case com o repository

  return useCase;
}
