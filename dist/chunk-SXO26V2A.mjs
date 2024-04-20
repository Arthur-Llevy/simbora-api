import {
  __async,
  prisma
} from "./chunk-JIUPXA24.mjs";

// src/routes/login.ts
import { z } from "zod";
function login(app) {
  return __async(this, null, function* () {
    app.withTypeProvider().post("/users/login", {
      schema: {
        body: z.object({
          email: z.string().email(),
          password: z.string()
        })
      }
    }, (request, reply) => __async(this, null, function* () {
      const { email, password } = request.body;
      const user = yield prisma.user.findFirst({
        where: {
          email,
          password
        }
      });
      if (user !== null) {
        return reply.status(200).send({ user });
      }
      return reply.status(401).send({});
    }));
  });
}

export {
  login
};
