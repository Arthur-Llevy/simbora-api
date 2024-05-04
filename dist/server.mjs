import {
  createEvent,
  init_create_event
} from "./chunk-56K6RIZX.mjs";
import {
  createRegister,
  init_create_register
} from "./chunk-FADJKRRK.mjs";
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
} from "./chunk-3EFXFXJO.mjs";
import {
  init_register_user_on_event,
  registerUserOnEvent
} from "./chunk-7KEAQRVU.mjs";
import {
  __async,
  __commonJS
} from "./chunk-P4XBUVW2.mjs";

// src/server.ts
import fastify from "fastify";
import { fastifyCors } from "@fastify/cors";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
var require_server = __commonJS({
  "src/server.ts"(exports) {
    init_get_all_events();
    init_get_one_event();
    init_create_event();
    init_login();
    init_create_register();
    init_register_user_on_event();
    var app = fastify();
    app.register(fastifyCors, {
      origin: "*"
    });
    app.register(fastifySwagger, {
      swagger: {
        consumes: ["application/json"],
        produces: ["application/json"],
        info: {
          title: "pass.in",
          description: "Especifica\xE7\xF5es da API Pass.in",
          version: "1.0"
        }
      },
      transform: jsonSchemaTransform
    });
    app.register(fastifySwaggerUi, {
      routePrefix: "/docs"
    });
    app.setSerializerCompiler(serializerCompiler);
    app.setValidatorCompiler(validatorCompiler);
    app.register(getAllEvents);
    app.register(getOneEvent);
    app.register(createEvent);
    app.register(login);
    app.register(createRegister);
    app.register(registerUserOnEvent);
    setInterval(() => __async(exports, null, function* () {
      yield fetch("https://simbora-api.onrender.com/events", {
        headers: { "Content-Type": "application/json" }
      }).then((response) => response.json()).then((data) => console.log(data));
    }), 1e4);
    app.listen({
      port: 3333,
      host: "0.0.0.0"
    }).then(() => console.log("Server on."));
  }
});
export default require_server();
