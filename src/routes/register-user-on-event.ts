import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { prisma } from '../lib/prisma';

export async function registerUserOnEvent(app: FastifyInstance){
	app
	.withTypeProvider<ZodTypeProvider>()
	.patch('/users/register-event', {
		schema: {
			body: z.object({
				id: z.number(),
				events: z.array(z.number())
			})
		}
	}, async (request, reply) => {

		const { id, events } = request.body;

		const user = await prisma.user.update({
			where: {
				id
			},
			data: {
                events: {
                    set: events.map(eventId => ({ id: eventId }))
                }
            }
		});

		return reply.status(201).send({ user });

	})
};