import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { z } from 'zod';

export async function getOneEvent(app: FastifyInstance){
	app
	.withTypeProvider<ZodTypeProvider>()
	.get('/events/:id', {
		schema: {
			params: z.object({
				id: z.string(),
			})
		}
	}, async (request, reply) => {

		const { id } = request.params;

		const event = await prisma.event.findUnique({
			where: {
				id: Number(id)
			}
		})

		return reply.status(200).send({ event });

	})
}