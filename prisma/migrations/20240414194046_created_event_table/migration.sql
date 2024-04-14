-- CreateTable
CREATE TABLE "event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "localization" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "startsAt" TEXT NOT NULL,
    "endsAt" TEXT NOT NULL
);
