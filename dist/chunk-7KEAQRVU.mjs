import {
  __async,
  __esm,
  init_prisma,
  prisma
} from "./chunk-P4XBUVW2.mjs";

// src/routes/register-user-on-event.ts
import { z } from "zod";
function registerUserOnEvent(app) {
  return __async(this, null, function* () {
    app.withTypeProvider().patch("/users/register-event", {
      schema: {
        body: z.object({
          id: z.number(),
          events: z.array(z.number())
        })
      }
    }, (request, reply) => __async(this, null, function* () {
      const { id, events } = request.body;
      const user = yield prisma.user.update({
        where: {
          id
        },
        data: {
          events: {
            set: events.map((eventId) => ({ id: eventId }))
          }
        }
      });
      return reply.status(201).send({ user });
    }));
  });
}
var init_register_user_on_event = __esm({
  "src/routes/register-user-on-event.ts"() {
    init_prisma();
  }
});

export {
  registerUserOnEvent,
  init_register_user_on_event
};
