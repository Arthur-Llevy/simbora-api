// Dependencies
import fastify from 'fastify';
import { fastifyCors } from '@fastify/cors';
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod';

// Routes
import { getAllEvents } from './routes/get-all-events';
import { createEvent } from './routes/create-event';

const app = fastify();

app.register(fastifyCors, {
	origin: '*'
})

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.register(getAllEvents);
app.register(createEvent);

app.listen({
	port: 3333,
	host: '0.0.0.0'
})
.then(() => console.log('Server on.'))