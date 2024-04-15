import {
  createEvent
} from "./chunk-WSGREQGR.mjs";
import {
  getAllEvents
} from "./chunk-WHK7YXFO.mjs";
import "./chunk-JIUPXA24.mjs";

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
app.register(createEvent);
app.listen({
  port: 3333,
  host: "0.0.0.0"
}).then(() => console.log("Server on."));
