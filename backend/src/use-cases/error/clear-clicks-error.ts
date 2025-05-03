export class ClearClicksError extends Error {
  constructor() {
    super("Falha ao deletar os dados.");
  }
}
