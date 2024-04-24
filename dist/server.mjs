import {
  createEvent,
  init_create_event
} from "./chunk-56K6RIZX.mjs";
import {
  createRegister,
  init_create_register
} from "./chunk-XKAPMIFP.mjs";
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
} from "./chunk-3U3GBMMN.mjs";
import {
  __async,
  __commonJS
} from "./chunk-P4XBUVW2.mjs";

// src/server.ts
import fastify from "fastify";
import { fastifyCors } from "@fastify/cors";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
var require_server = __commonJS({
  "src/server.ts"(exports) {
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
