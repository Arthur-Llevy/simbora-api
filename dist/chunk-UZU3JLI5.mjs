import {
  init_prisma,
  prisma
} from "./chunk-AMKFRBEW.mjs";
import {
  __async,
  __esm
} from "./chunk-HT6JQ5L5.mjs";

// src/routes/get-one-event.ts
import { z } from "zod";
function getOneEvent(app) {
  return __async(this, null, function* () {
    app.withTypeProvider().get("/events/:id", {
      schema: {
        params: z.object({
          id: z.string()
        })
      }
    }, (request, reply) => __async(this, null, function* () {
      const { id } = request.params;
      const event = yield prisma.event.findUnique({
        where: {
          id: Number(id)
        }
      });
      return reply.status(200).send({ event });
    }));
  });
}
var init_get_one_event = __esm({
  "src/routes/get-one-event.ts"() {
    init_prisma();
  }
});

export {
  getOneEvent,
  init_get_one_event
};
