import { InsertClickError } from "@/use-cases/error/insertClickError";
import { makeCreateClicksUseCase } from "@/use-cases/factories/make-create-clicks-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createClickBodySchema = z.object({
    name: z.string(),
    timeBetweenClicks: z.coerce.number(),
  });

  const { name, timeBetweenClicks } = createClickBodySchema.parse(request.body);

  try {
    const createClickUseCase = makeCreateClicksUseCase();

    await createClickUseCase.execute({
      name,
      timeBetweenClicks,
    });
  } catch (error) {
    if (error instanceof InsertClickError) {
      return reply.status(409).send({
        message: error.message,
      });
    }
  }
  return reply.status(201).send();
}
