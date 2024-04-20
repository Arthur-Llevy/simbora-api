import {
  createEvent
} from "./chunk-WPJNDMTZ.mjs";
import {
  createRegister
} from "./chunk-EZOYLCSO.mjs";
import {
  getAllEvents
} from "./chunk-3BXXYB3T.mjs";
import {
  getOneEvent
} from "./chunk-6RKHSUYG.mjs";
import {
  login
} from "./chunk-S3CLPMB4.mjs";
import "./chunk-ZKD6EWI5.mjs";

// src/server.ts
import fastify from "fastify";
import { fastifyCors } from "@fastify/cors";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
var app = fastify();
app.register(fastifyCors, {
  origin: "*"
});
app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);
app.register(getAllEvents);
app.register(getOneEvent);
app.register(createEvent);
app.register(login);
app.register(createRegister);
app.listen({
  port: 3333,
  host: "0.0.0.0"
}).then(() => console.log("Server on."));
