-- CreateTable
CREATE TABLE "event_user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "event_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL
);
