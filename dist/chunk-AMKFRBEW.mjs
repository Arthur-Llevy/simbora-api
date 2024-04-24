import {
  __esm
} from "./chunk-HT6JQ5L5.mjs";

// src/lib/prisma.ts
import { PrismaClient } from "@prisma/client";
var prisma;
var init_prisma = __esm({
  "src/lib/prisma.ts"() {
    prisma = new PrismaClient({
      //log: ['query']
    });
  }
});

export {
  prisma,
  init_prisma
};
