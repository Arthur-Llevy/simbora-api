import {
  __async,
  prisma
} from "./chunk-JIUPXA24.mjs";

// src/routes/create-register.ts
import { z } from "zod";
function createRegister(app) {
  return __async(this, null, function* () {
    app.withTypeProvider().post("/users/create-register", {
      schema: {
        body: z.object({
          email: z.string().email(),
          password: z.string()
        })
      }
    }, (request, reply) => __async(this, null, function* () {
      const { email, password } = request.body;
      const user = yield prisma.user.create({
        data: {
          email,
          password
        }
      });
      return reply.status(201).send({ user });
    }));
  });
}

export {
  createRegister
};
