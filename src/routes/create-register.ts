import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { prisma } from '../lib/prisma';

export async function createRegister(app: FastifyInstance){
	app
	.withTypeProvider<ZodTypeProvider>()
	.post('/users/create-register', {
		schema: {
			body: z.object({
				name: z.string(),
				email: z.string().email(),
				password: z.string(),
				phone: z.string(),
				events: z.array(z.number())
			})
		}
	}, async (request, reply) => {

		const { email, password, name, phone, events } = request.body;

		const user = await prisma.user.create({
			data: {
				email,
				password,
				name,
				phone,
				events: {
                    connect: events.map(eventId => ({ id: eventId }))
                }
			}

		});

		return reply.status(201).send({ user });

	})
};