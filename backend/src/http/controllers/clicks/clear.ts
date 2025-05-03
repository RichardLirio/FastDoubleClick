import { ClearClicksError } from "@/use-cases/error/clear-clicks-error";
import { makeClearClicksUseCase } from "@/use-cases/factories/make-clear-clicks-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function clear(_: FastifyRequest, reply: FastifyReply) {
  const clearClickUseCase = makeClearClicksUseCase();
  try {
    await clearClickUseCase.execute();
    return reply.status(204).send();
  } catch (error) {
    if (error instanceof ClearClicksError) {
      return reply.status(409).send({
        message: error.message,
      });
    }
  }
}
