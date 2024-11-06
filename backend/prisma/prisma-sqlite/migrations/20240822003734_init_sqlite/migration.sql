-- CreateTable
CREATE TABLE "Request" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tanggal" TEXT NOT NULL,
    "userId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "RequestDetails" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "jumlah" INTEGER NOT NULL,
    "barangId" TEXT NOT NULL,
    "requestId" TEXT NOT NULL,
    CONSTRAINT "RequestDetails_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "Request" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
