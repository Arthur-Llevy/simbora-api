import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { z } from 'zod';

export async function createEvent(app: FastifyInstance){
	app
	.withTypeProvider<ZodTypeProvider>()
	.post('/events', {
		schema: {
			body: z.object({
				name: z.string(),
				localization: z.string(),
				type: z.string(),
				date: z.string(),
				startsAt: z.string(),
				endsAt: z.string()
			})
		}
	}, async (request, reply) => {

		const { name, localization, type, date, startsAt, endsAt } = request.body;

		const newEvent = await prisma.event.create({
			data: {
				name,
				localization,
				type,
				date,
				startsAt,
				endsAt
			}
		});

		return reply.status(201).send({ newEvent })

	})
}