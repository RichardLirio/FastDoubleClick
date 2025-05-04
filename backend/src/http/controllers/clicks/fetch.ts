import { makeFetchClicksUseCase } from "@/use-cases/factories/make-fetch-clicks-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function fetch(_: FastifyRequest, reply: FastifyReply) {
  const fetchClickUseCase = makeFetchClicksUseCase();

  const { Clicks, count } = await fetchClickUseCase.execute();

  return reply.status(200).send({
    Clicks,
    count,
  });
}
