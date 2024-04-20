import {
  __async,
  __esm,
  init_prisma,
  prisma
} from "./chunk-P4XBUVW2.mjs";

// src/routes/create-event.ts
import { z } from "zod";
function createEvent(app) {
  return __async(this, null, function* () {
    app.withTypeProvider().post("/events", {
      schema: {
        body: z.object({
          name: z.string(),
          localization: z.string(),
          type: z.string(),
          date: z.string(),
          startsAt: z.string(),
          endsAt: z.string()
        })
      }
    }, (request, reply) => __async(this, null, function* () {
      const { name, localization, type, date, startsAt, endsAt } = request.body;
      const newEvent = yield prisma.event.create({
        data: {
          name,
          localization,
          type,
          date,
          startsAt,
          endsAt
        }
      });
      return reply.status(201).send({ newEvent });
    }));
  });
}
var init_create_event = __esm({
  "src/routes/create-event.ts"() {
    init_prisma();
  }
});

export {
  createEvent,
  init_create_event
};
