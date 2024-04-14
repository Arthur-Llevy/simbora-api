-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "localization" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "startsAt" TEXT NOT NULL,
    "endsAt" TEXT NOT NULL
);
INSERT INTO "new_event" ("date", "endsAt", "id", "localization", "name", "startsAt", "type") SELECT "date", "endsAt", "id", "localization", "name", "startsAt", "type" FROM "event";
DROP TABLE "event";
ALTER TABLE "new_event" RENAME TO "event";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
