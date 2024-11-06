import express, { Request, Response } from "express";

import adminmiddleware from "../middlewares/adminmiddleware";

import prismaPostgres from "../utils/db-postgres";

import { z } from "zod";

const router = express.Router();

const inputBarangSchema = z.object({
  tanggal: z.string(),
  namaPengadaan: z.string(),
  userId: z.string().optional(),
  inputBarangDetails: z.array(
    z.object({
      jumlah: z.number(),
      barangId: z.string(),
    }),
  ),
});

// type inputBarangType = z.infer<typeof inputBarangSchema>;

interface RequestWithDecode extends Request {
  decode?: any;
}

router.get("/", adminmiddleware, async (_req, res) => {
  const result = await prismaPostgres.inputBarang.findMany({
    include: { inputBarangDetails: true },
  });

  res.json({
    data: result,
  });
});

router.get("/inputBarangDetails", adminmiddleware, async (req, res) => {
  const { inputBarangId } = req.query;

  const result = await prismaPostgres.inputBarangDetail.findMany({
    where: {
      inputBarangId: inputBarangId as string,
    },
    select: {
      jumlah: true,
      barangId: true,
      barang: {
        select: {
          namaBarang: true,
          satuanBarang: true,
        },
      },
      inputBarang: {
        select: {
          namaPengadaan: true,
        },
      },
    },
  });

  res.json({
    data: result,
  });
});

router.get(
  "/:inputBarangId/:barangId",
  adminmiddleware,
  async (req: RequestWithDecode, res) => {
    const { inputBarangId, barangId } = req.params as {
      inputBarangId: string;
      barangId: string;
    };
    const result = await prismaPostgres.inputBarangDetail.findUnique({
      where: {
        barangId_inputBarangId: {
          barangId: barangId,
          inputBarangId: inputBarangId,
        },
      },
      include: {
        barang: true,
        inputBarang: true,
      },
    });

    res.json({
      data: result,
    });
  },
);

router.get("/namaPengadaan", adminmiddleware, async (req, res) => {
  try {
    const { id } = req.query;
    if (id) {
      const namaPengadaanList = await prismaPostgres.inputBarang.findUnique({
        where: { id: id as string },
      });

      if (namaPengadaanList) {
        res.json({
          data: namaPengadaanList,
        });
      } else {
        res.status(400).json({
          msg: "data tidak ditemukan",
        });
      }
    } else {
      const namaPengadaanList = await prismaPostgres.inputBarang.findMany();

      res.json({
        data: namaPengadaanList,
      });
    }
  } catch (e) {
    res.json({
      msg: e,
    });
  }
});

router.put("/:id", adminmiddleware, async (req: RequestWithDecode, res) => {
  const id = req.params.id as string;

  const { namaPengadaan, tanggal } = req.body;

  const tanggalEpoch = new Date(tanggal).getTime();

  const namaPengadaanHasil = await prismaPostgres.inputBarang.findUnique({
    where: { id: id },
  });

  if (namaPengadaanHasil) {
    const resultUpdate = await prismaPostgres.inputBarang.update({
      where: { id: id },
      data: {
        namaPengadaan: namaPengadaan,
        tanggal: tanggalEpoch.toString(),
      },
    });
    if (resultUpdate) {
      res.json({
        msg: "update input barang berhasil",
      });
    } else {
      res.json({
        msg: "update input barang tidak berhasil",
      });
    }
  }
});

router.post(
  "/add",
  adminmiddleware,
  async (req: RequestWithDecode, res: Response) => {
    const parsedData = inputBarangSchema.safeParse(req.body);

    if (!parsedData.success) {
      return res.json({
        msg: parsedData.error.errors,
      });
    }

    const userId = req.decode.id;

    const { tanggal, namaPengadaan, inputBarangDetails } = parsedData.data;

    const tanggalEpoch = new Date(tanggal).getTime();

    try {
      await prismaPostgres.inputBarang.create({
        data: {
          tanggal: tanggalEpoch.toString(),
          namaPengadaan: namaPengadaan.toLowerCase(),
          userId: userId,
          inputBarangDetails: {
            create: inputBarangDetails.map((detail: any) => ({
              jumlah: detail.jumlah,
              barangId: detail.barangId,
            })),
          },
        },
      });

      for (const detail of inputBarangDetails) {
        await prismaPostgres.barang.update({
          where: { id: detail.barangId },
          data: { stokBarang: { increment: detail.jumlah } },
        });
      }

      res.json({
        msg: "input barang berhasil",
      });
    } catch (e) {
      res.json({
        msg: e,
      });
    }
  },
);

// setelah add pengadaan maka add barang pakai route dibawah
router.put(
  "/update/:id",
  adminmiddleware,
  async (req: RequestWithDecode, res: Response) => {
    const inputBarangId = req.params.id;
    const { inputBarangDetails } = req.body;

    try {
      // Ambil data input barang dan detailnya yang ada
      const currentInputBarang = await prismaPostgres.inputBarang.findUnique({
        where: { id: inputBarangId },
        include: { inputBarangDetails: true },
      });

      if (!currentInputBarang) {
        return res.status(404).json({
          msg: "Input Barang tidak ditemukan",
        });
      }

      // Iterate over inputBarangDetails in the payload
      for (const newDetail of inputBarangDetails) {
        // Find the corresponding old detail for the same barangId
        const existingDetail = currentInputBarang.inputBarangDetails.find(
          (detail) => detail.barangId === newDetail.barangId,
        );

        if (existingDetail) {
          // Revert old stock for this specific barangId
          await prismaPostgres.barang.update({
            where: { id: existingDetail.barangId },
            data: { stokBarang: { decrement: existingDetail.jumlah } }, // Kurangi stok lama
          });

          // Update the existing detail with the new values
          await prismaPostgres.inputBarangDetail.update({
            where: { id: existingDetail.id },
            data: { jumlah: newDetail.jumlah }, // Update jumlah
          });

          // Increment new stock for this barangId
          await prismaPostgres.barang.update({
            where: { id: newDetail.barangId },
            data: { stokBarang: { increment: newDetail.jumlah } }, // Tambah stok baru
          });
        } else {
          // If the detail does not exist, create it (optional, depends on your use case)
          await prismaPostgres.inputBarangDetail.create({
            data: {
              barangId: newDetail.barangId,
              jumlah: newDetail.jumlah,
              inputBarangId: inputBarangId,
            },
          });

          // Increment new stock for this barangId
          await prismaPostgres.barang.update({
            where: { id: newDetail.barangId },
            data: { stokBarang: { increment: newDetail.jumlah } },
          });
        }
      }

      res.status(200).json({
        msg: "Input Barang berhasil diperbarui",
      });

      // // Update tanggal and namaPengadaan only if needed
      // const updatedInputBarang = await prismaPostgres.inputBarang.update({
      //   where: { id: inputBarangId },
      //   data: {
      //     tanggal: tanggalEpoch.toString(),
      //     namaPengadaan: namaPengadaan,
      //   },
      // });
    } catch (e) {
      res.status(500).json({
        msg: e instanceof Error ? e.message : "Terjadi kesalahan",
      });
    }
  },
);

// delete keseluruhan berdasarkan input barang id
router.delete(
  "/:id",
  adminmiddleware,
  async (req: RequestWithDecode, res: Response) => {
    const { id } = req.params;

    try {
      // Fetch the input barang and its details
      const inputBarang = await prismaPostgres.inputBarang.findUnique({
        where: { id: id },
        include: { inputBarangDetails: true },
      });

      if (!inputBarang) {
        return res.status(404).json({
          msg: "Input Barang not found",
        });
      }

      // Decrement the stokBarang for each item in the inputBarangDetails
      for (const detail of inputBarang.inputBarangDetails) {
        await prismaPostgres.barang.update({
          where: { id: detail.barangId },
          data: { stokBarang: { decrement: detail.jumlah } }, // Decrease stock
        });
      }

      // Delete the related inputBarangDetails
      await prismaPostgres.inputBarangDetail.deleteMany({
        where: { inputBarangId: id },
      });

      // Delete the input barang entry
      await prismaPostgres.inputBarang.delete({
        where: { id: id },
      });

      res.status(200).json({
        msg: "Input Barang deleted successfully",
      });
    } catch (e) {
      res.status(500).json({
        msg: e instanceof Error ? e.message : "An error occurred",
      });
    }
  },
);

router.delete(
  "/inputBarangDetail/:id/:barangId",
  adminmiddleware,
  async (req, res) => {
    const { id, barangId } = req.params as {
      id: string;
      barangId: string;
    };

    const result = await prismaPostgres.inputBarangDetail.findUnique({
      where: {
        barangId_inputBarangId: {
          barangId: barangId,
          inputBarangId: id,
        },
      },
      include: {
        barang: true,
        inputBarang: true,
      },
    });

    // update stok barang
    await prismaPostgres.barang.update({
      where: { id: barangId },
      data: { stokBarang: { decrement: result?.jumlah } },
    });

    // delete inputBarangDetail by id
    const hasilDelete = await prismaPostgres.inputBarangDetail.delete({
      where: {
        barangId_inputBarangId: {
          barangId: barangId,
          inputBarangId: id,
        },
      },
    });

    if (hasilDelete) {
      res.status(200).json({
        msg: "Delete Item Berhasil",
      });
    }
  },
);

export default router;
