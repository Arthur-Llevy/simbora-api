import {
  __async,
  prisma
} from "./chunk-ZKD6EWI5.mjs";

// src/routes/create-register.ts
import { z } from "zod";
function createRegister(app) {
  return __async(this, null, function* () {
    app.withTypeProvider().post("/users/create-register", {
      schema: {
        body: z.object({
          name: z.string(),
          email: z.string().email(),
          password: z.string()
        })
      }
    }, (request, reply) => __async(this, null, function* () {
      const { email, password, name } = request.body;
      const user = yield prisma.user.create({
        data: {
          email,
          password,
          name
        }
      });
      return reply.status(201).send({ user });
    }));
  });
}

export {
  createRegister
};
