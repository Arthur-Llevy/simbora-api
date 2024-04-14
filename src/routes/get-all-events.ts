import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { z } from 'zod';

export async function getAllEvents(app: FastifyInstance){
	app
	.withTypeProvider<ZodTypeProvider>()
	.get('/events', {
		schema: {
			response: {
				200: z.object({
					events: z.array(
						z.object({
							name: z.string(),
							localization: z.string(),
							type: z.string(),
							date: z.string(),
							startsAt: z.string(),
							endsAt: z.string()
						})
					)
				})
			}
		}
	}, async (request, reply) => {
		const events = await prisma.event.findMany();

		return reply.status(200).send({events});

	})
}