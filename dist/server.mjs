import {
  createEvent
} from "./chunk-WSGREQGR.mjs";
import {
  createRegister
} from "./chunk-B4TIFDCQ.mjs";
import {
  getAllEvents
} from "./chunk-WUUDG5NI.mjs";
import {
  getOneEvent
} from "./chunk-6PPEHXMP.mjs";
import {
  login
} from "./chunk-SXO26V2A.mjs";
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
app.register(getOneEvent);
app.register(createEvent);
app.register(login);
app.register(createRegister);
app.listen({
  port: 3333,
  host: "0.0.0.0"
}).then(() => console.log("Server on."));
