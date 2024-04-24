import {
  init_prisma,
  prisma
} from "./chunk-AMKFRBEW.mjs";
import {
  __async,
  __esm
} from "./chunk-HT6JQ5L5.mjs";

// src/routes/create-register.ts
import { z } from "zod";
function createRegister(app) {
  return __async(this, null, function* () {
    app.withTypeProvider().post("/users/create-register", {
      schema: {
        body: z.object({
          name: z.string(),
          email: z.string().email(),
          password: z.string(),
          phone: z.string()
        })
      }
    }, (request, reply) => __async(this, null, function* () {
      const { email, password, name } = request.body;
      const user = yield prisma.user.create({
        data: {
          email,
          password,
          name,
          phone
        }
      });
      return reply.status(201).send({ user });
    }));
  });
}
var init_create_register = __esm({
  "src/routes/create-register.ts"() {
    init_prisma();
  }
});

export {
  createRegister,
  init_create_register
};
