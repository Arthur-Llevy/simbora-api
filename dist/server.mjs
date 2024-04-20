import {
  createEvent,
  init_create_event
} from "./chunk-56K6RIZX.mjs";
import {
  createRegister,
  init_create_register
} from "./chunk-2MR2E5PA.mjs";
import {
  getAllEvents,
  init_get_all_events
} from "./chunk-7GF7AGIO.mjs";
import {
  getOneEvent,
  init_get_one_event
} from "./chunk-UZOBRDSY.mjs";
import {
  init_login,
  login
} from "./chunk-PYX5TCR2.mjs";
import {
  __async,
  __commonJS,
  init_prisma,
  prisma
} from "./chunk-P4XBUVW2.mjs";

// src/server.ts
import fastify from "fastify";
import { fastifyCors } from "@fastify/cors";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
var require_server = __commonJS({
  "src/server.ts"(exports) {
    init_prisma();
    init_get_all_events();
    init_get_one_event();
    init_create_event();
    init_login();
    init_create_register();
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
    app.post("/user", (request, reply) => __async(exports, null, function* () {
      yield prisma.user.create({
        data: {
          name: "levy",
          email: `teste${(Math.random() * 1e3).toFixed(0)}@gmail.com`,
          password: "123"
        }
      });
    }));
    app.listen({
      port: 3333,
      host: "0.0.0.0"
    }).then(() => console.log("Server on."));
  }
});
export default require_server();
