import {
  __async,
  prisma
} from "./chunk-JIUPXA24.mjs";

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

export {
  getAllEvents
};
