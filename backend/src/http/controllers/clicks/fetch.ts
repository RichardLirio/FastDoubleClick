import { makeFetchClicksUseCase } from "@/use-cases/factories/make-fetch-clicks-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function fetch(request: FastifyRequest, reply: FastifyReply) {
  const fetchClickQuerySchema = z.object({
    page: z.coerce.number().min(1).default(1),
  });

  const { page } = fetchClickQuerySchema.parse(request.query);

  const fetchClickUseCase = makeFetchClicksUseCase();

  const { Clicks } = await fetchClickUseCase.execute({
    page,
  });

  return reply.status(200).send({
    Clicks,
  });
}
