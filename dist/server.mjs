import {
  createEvent
} from "./chunk-WSGREQGR.mjs";
import {
  createRegister
} from "./chunk-WEJWYJ2G.mjs";
import {
  getAllEvents
} from "./chunk-WHK7YXFO.mjs";
import {
  login
} from "./chunk-BJBMP32M.mjs";
import "./chunk-JIUPXA24.mjs";

// src/server.ts
import fastify from "fastify";
import { fastifyCors } from "@fastify/cors";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
var app = fastify();
app.register(fastifyCors, {
  origin: "https://simbora-web.vercel.app/"
});
app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);
app.register(getAllEvents);
app.register(createEvent);
app.register(login);
app.register(createRegister);
app.listen({
  port: 3333,
  host: "0.0.0.0"
}).then(() => console.log("Server on."));
