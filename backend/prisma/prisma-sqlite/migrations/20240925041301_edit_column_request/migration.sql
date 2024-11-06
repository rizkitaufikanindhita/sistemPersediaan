/*
  Warnings:

  - You are about to drop the column `nomer` on the `Request` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Request" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tanggal" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "bagian" TEXT NOT NULL
);
INSERT INTO "new_Request" ("bagian", "id", "tanggal", "userId") SELECT "bagian", "id", "tanggal", "userId" FROM "Request";
DROP TABLE "Request";
ALTER TABLE "new_Request" RENAME TO "Request";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
