// Dependencies
import fastify from 'fastify';
import { fastifyCors } from '@fastify/cors';
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod';
import { prisma } from './lib/prisma';

// Routes
import { getAllEvents } from './routes/get-all-events';
import { getOneEvent } from './routes/get-one-event';
import { createEvent } from './routes/create-event';
import { login } from './routes/login';
import { createRegister } from './routes/create-register';

const app = fastify();

app.register(fastifyCors, {
	origin: '*'
})

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.register(getAllEvents);
app.register(getOneEvent);
app.register(createEvent);
app.register(login);
app.register(createRegister);

app.post('/user', async (request, reply) => {
	await prisma.user.create({
		data: {
			name: 'levy',
			email: `teste${(Math.random() * 1000).toFixed(0)}@gmail.com`,
			password: '123'
		}
	})
})

app.listen({
	port: 3333,
	host: '0.0.0.0'
})
.then(() => console.log('Server on.'))