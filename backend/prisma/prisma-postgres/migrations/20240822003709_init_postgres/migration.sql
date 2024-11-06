-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nim" TEXT NOT NULL,
    "bagian" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Barang" (
    "id" TEXT NOT NULL,
    "namaBarang" TEXT NOT NULL,
    "satuanBarang" TEXT NOT NULL,
    "stokBarang" INTEGER DEFAULT 0,

    CONSTRAINT "Barang_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InputBarang" (
    "id" TEXT NOT NULL,
    "tanggal" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "InputBarang_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InputBarangDetail" (
    "id" TEXT NOT NULL,
    "jumlah" INTEGER NOT NULL,
    "barangId" TEXT NOT NULL,
    "inputBarangId" TEXT NOT NULL,

    CONSTRAINT "InputBarangDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OutputBarang" (
    "id" TEXT NOT NULL,
    "tanggal" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "OutputBarang_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OutputBarangDetail" (
    "id" TEXT NOT NULL,
    "jumlah" INTEGER NOT NULL,
    "barangId" TEXT NOT NULL,
    "outputBarangId" TEXT NOT NULL,

    CONSTRAINT "OutputBarangDetail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_nim_key" ON "User"("nim");

-- CreateIndex
CREATE UNIQUE INDEX "InputBarangDetail_barangId_inputBarangId_key" ON "InputBarangDetail"("barangId", "inputBarangId");

-- CreateIndex
CREATE UNIQUE INDEX "OutputBarangDetail_barangId_outputBarangId_key" ON "OutputBarangDetail"("barangId", "outputBarangId");

-- AddForeignKey
ALTER TABLE "InputBarang" ADD CONSTRAINT "InputBarang_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InputBarangDetail" ADD CONSTRAINT "InputBarangDetail_barangId_fkey" FOREIGN KEY ("barangId") REFERENCES "Barang"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InputBarangDetail" ADD CONSTRAINT "InputBarangDetail_inputBarangId_fkey" FOREIGN KEY ("inputBarangId") REFERENCES "InputBarang"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OutputBarang" ADD CONSTRAINT "OutputBarang_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OutputBarangDetail" ADD CONSTRAINT "OutputBarangDetail_barangId_fkey" FOREIGN KEY ("barangId") REFERENCES "Barang"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OutputBarangDetail" ADD CONSTRAINT "OutputBarangDetail_outputBarangId_fkey" FOREIGN KEY ("outputBarangId") REFERENCES "OutputBarang"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
