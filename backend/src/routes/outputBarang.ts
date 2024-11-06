import express, { Request, Response } from "express";

import authmiddleware from "../middlewares/authmiddleware";

import prismaPostgres from "../utils/db-postgres";

import { z } from "zod";

const router = express.Router();

const outputBarangSchema = z.object({
  bagian: z.string(),
  requestId: z.string(),
  tanggal: z.string(),
  userId: z.string(),
  outputBarangDetails: z.array(
    z.object({
      barangId: z.string(),
      jumlah: z.number(),
      requestId: z.string(),
    }),
  ),
});

type outputBarangType = z.infer<typeof outputBarangSchema>;

interface RequestWithDecode extends Request {
  decode?: any;
}

router.get("/", authmiddleware, async (req, res) => {
  const result = await prismaPostgres.outputBarang.findMany({
    include: {
      outputBarangDetails: {
        include: {
          barang: true,
        },
      },
    },
  });

  res.json({
    data: result,
  });
});

router.get("/:id", authmiddleware, async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await prismaPostgres.outputBarang.findFirst({
    where: { id: id },
    include: {
      outputBarangDetails: {
        include: {
          barang: true,
        },
      },
    },
  });

  if (result) {
    res.json({
      data: result,
    });
  } else {
    res.json({
      msg: "data tidak ada",
    });
  }
});

router.get("/status/byId", authmiddleware, async (req: RequestWithDecode, res: Response) => {
  const userId = req.decode.id;

  const result = await prismaPostgres.outputBarang.findMany({
    where: { userId: userId as string },
    include: {
      outputBarangDetails: {
        include: {
          barang: true,
        },
      },
    },
  });

  if (result) {
    res.json({
      data: result,
    });
  } else {
    res.json({
      msg: "data tidak ada",
    });
  }
});


router.post(
  "/add",
  authmiddleware,
  async (req: RequestWithDecode, res: Response) => {
    const parsedData = outputBarangSchema.safeParse(req.body);

    if (!parsedData.success) {
      return res.json({
        msg: parsedData.error.errors,
      });
    }

    // const userId = req.decode.id;

    const { bagian, requestId, tanggal, userId, outputBarangDetails } =
      parsedData.data;

    // const tanggalEpoch = new Date(tanggal).getTime();
    // model OutputBarangDetail {
    //   id              String   @id @default(cuid())
    //   jumlah          Int
    //   barangId        String
    //   requestId       String
    //   outputBarangId  String
    //
    //   barang          Barang       @relation(fields: [barangId], references: [id])
    //   outputBarang    OutputBarang @relation(fields: [outputBarangId], references: [id])
    //
    //   @@unique([barangId, outputBarangId])
    // }

    try {
      await prismaPostgres.outputBarang.create({
        data: {
          bagian: bagian,
          requestId: requestId,
          tanggal: tanggal,
          userId: userId,
          outputBarangDetails: {
            create: outputBarangDetails.map((detail: any) => ({
              jumlah: detail.jumlah,
              barangId: detail.barangId,
              requestId: detail.requestId,
            })),
          },
        },
      });

      for (const detail of outputBarangDetails) {
        await prismaPostgres.barang.update({
          where: { id: detail.barangId },
          data: { stokBarang: { decrement: detail.jumlah } },
        });
      }

      res.json({
        msg: "output barang berhasil",
      });
    } catch (e) {
      res.json({
        msg: e,
      });
    }
  },
);

router.put(
  "/:id",
  authmiddleware,
  async (req: RequestWithDecode, res: Response) => {
    const outputBarangId = req.params.id;
    const parsedData = outputBarangSchema.safeParse(req.body);

    if (!parsedData.success) {
      return res.status(400).json({
        msg: parsedData.error.errors,
      });
    }

    const { tanggal, outputBarangDetails } = parsedData.data;

    const tanggalEpoch = new Date(tanggal).getTime();

    try {
      // Ambil data output barang dan detailnya yang ada
      const currentOutputBarang = await prismaPostgres.outputBarang.findUnique({
        where: { id: outputBarangId },
        include: { outputBarangDetails: true },
      });

      if (!currentOutputBarang) {
        return res.status(404).json({
          msg: "Output Barang tidak ditemukan",
        });
      }

      // Revert stok barang lama berdasarkan detail lama
      for (const detail of currentOutputBarang.outputBarangDetails) {
        await prismaPostgres.barang.update({
          where: { id: detail.barangId },
          data: { stokBarang: { increment: detail.jumlah } }, // Kurangi stok lama
        });
      }

      // Hapus detail lama
      await prismaPostgres.outputBarangDetail.deleteMany({
        where: { outputBarangId: outputBarangId },
      });

      // Tambah detail baru
      await prismaPostgres.outputBarangDetail.createMany({
        data: outputBarangDetails.map((detail: any) => ({
          barangId: detail.barangId,
          jumlah: detail.jumlah,
          requestId: detail.requestId,
          outputBarangId: outputBarangId,
        })),
      });

      // Tambah stok baru berdasarkan detail yang diperbarui
      for (const detail of outputBarangDetails) {
        await prismaPostgres.barang.update({
          where: { id: detail.barangId },
          data: { stokBarang: { decrement: detail.jumlah } }, // Tambah stok baru
        });
      }

      // Update data input barang
      const updatedOutputBarang = await prismaPostgres.outputBarang.update({
        where: { id: outputBarangId },
        data: { tanggal: tanggalEpoch.toString() },
      });

      res.status(200).json({
        data: updatedOutputBarang,
        msg: "Output Barang berhasil diperbarui",
      });
    } catch (e) {
      res.status(500).json({
        msg: e instanceof Error ? e.message : "Terjadi kesalahan",
      });
    }
  },
);

router.delete(
  "/:id",
  authmiddleware,
  async (req: RequestWithDecode, res: Response) => {
    const { id } = req.params;

    try {
      // Fetch the output barang and its details
      const outputBarang = await prismaPostgres.outputBarang.findUnique({
        where: { id: id },
        include: { outputBarangDetails: true },
      });

      if (!outputBarang) {
        return res.status(404).json({
          msg: "Output Barang not found",
        });
      }

      // Decrement the stokBarang for each item in the outputBarangDetails
      for (const detail of outputBarang.outputBarangDetails) {
        await prismaPostgres.barang.update({
          where: { id: detail.barangId },
          data: { stokBarang: { increment: detail.jumlah } }, // Decrease stock
        });
      }

      // Delete the related outputBarangDetails
      await prismaPostgres.outputBarangDetail.deleteMany({
        where: { outputBarangId: id },
      });

      // Delete the output barang entry
      await prismaPostgres.outputBarang.delete({
        where: { id: id },
      });

      res.status(200).json({
        msg: "Output Barang deleted successfully",
      });
    } catch (e) {
      res.status(500).json({
        msg: e instanceof Error ? e.message : "An error occurred",
      });
    }
  },
);

export default router;
