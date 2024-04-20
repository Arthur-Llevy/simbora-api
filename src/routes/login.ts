import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { prisma } from '../lib/prisma';

export async function login(app: FastifyInstance){
	app
	.withTypeProvider<ZodTypeProvider>()
	.post('/users/login', {
		schema: {
			body: z.object({
				email: z.string().email(),
				password: z.string()
			})
		}
	}, async (request, reply) => {

		const { email, password } = request.body;

		const user = await prisma.user.findUnique({
			where: {
				email,
			}
		});

		if (user !== null && user.password === password) {
			return reply.status(200).send({ user });
		}

		
		return reply.status(401).send({});

	})
};