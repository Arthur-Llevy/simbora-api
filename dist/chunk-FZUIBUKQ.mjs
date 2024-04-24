import {
  init_prisma,
  prisma
} from "./chunk-AMKFRBEW.mjs";
import {
  __async,
  __esm
} from "./chunk-HT6JQ5L5.mjs";

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
      try {
        const { email, password } = request.body;
        const user = yield prisma.user.findUnique({
          where: {
            email
          }
        });
        if (user !== null && user.password === password) {
          return reply.status(200).send({ user });
        }
        return reply.status(401).send({});
      } catch (err) {
        console.log(`Something wrong: ${err}`);
      }
    }));
  });
}
var init_login = __esm({
  "src/routes/login.ts"() {
    init_prisma();
  }
});

export {
  login,
  init_login
};
