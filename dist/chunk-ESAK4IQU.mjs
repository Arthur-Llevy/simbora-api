import {
  init_prisma,
  prisma
} from "./chunk-AMKFRBEW.mjs";
import {
  __async,
  __esm
} from "./chunk-HT6JQ5L5.mjs";

// src/routes/get-all-events.ts
import { z } from "zod";
function getAllEvents(app) {
  return __async(this, null, function* () {
    app.withTypeProvider().get("/events", {
      schema: {
        response: {
          200: z.object({
            events: z.array(
              z.object({
                id: z.number(),
                name: z.string(),
                localization: z.string(),
                type: z.string(),
                date: z.string(),
                startsAt: z.string(),
                endsAt: z.string()
              })
            )
          })
        }
      }
    }, (request, reply) => __async(this, null, function* () {
      const events = yield prisma.event.findMany();
      return reply.status(200).send({ events });
    }));
  });
}
var init_get_all_events = __esm({
  "src/routes/get-all-events.ts"() {
    init_prisma();
  }
});

export {
  getAllEvents,
  init_get_all_events
};
