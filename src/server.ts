// Dependencies
import fastify from 'fastify';
import { fastifyCors } from '@fastify/cors';
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from 'fastify-type-provider-zod';
import { prisma } from './lib/prisma';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';

// Routes
import { getAllEvents } from './routes/get-all-events';
import { getOneEvent } from './routes/get-one-event';
import { createEvent } from './routes/create-event';
import { login } from './routes/login';
import { createRegister } from './routes/create-register';
import { registerUserOnEvent } from './routes/register-user-on-event';


const app = fastify();

app.register(fastifyCors, {
	origin: '*'
})

app.register(fastifySwagger, {
	swagger: {
		consumes: ['application/json'],
		produces: ['application/json'],
		info: {
			title: 'pass.in',
			description: 'Especificações da API Pass.in',
			version: '1.0'
		},
	},
	transform: jsonSchemaTransform
});

app.register(fastifySwaggerUi, {
	routePrefix: '/docs'
})

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.register(getAllEvents);
app.register(getOneEvent);
app.register(createEvent);
app.register(login);
app.register(createRegister);
app.register(registerUserOnEvent);


setInterval(async () => {
	await fetch('https://simbora-api.onrender.com/events', {
		headers: { 'Content-Type': 'application/json' }
	})
	.then(response => response.json())
	.then(data => console.log(data))
}, 10000)

app.listen({
	port: 3333,
	host: '0.0.0.0'
})
.then(() => console.log('Server on.'))