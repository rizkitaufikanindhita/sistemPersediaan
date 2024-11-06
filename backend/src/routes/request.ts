import express, { Request, Response } from "express";

import prismaSQLite from "../utils/db-sqlite";

import authmiddleware from "../middlewares/authmiddleware";

import { z } from "zod";
import { request } from "http";

const router = express.Router();

interface RequestWithDecode extends Request {
  decode?: any;
}

const requestSchema = z.object({
  tanggal: z.string(),
  userId: z.string().optional(),
  bagian: z.string(),
  requestDetails: z.array(
    z.object({
      jumlah: z.number(),
      barangId: z.string(),
    }),
  ),
});

router.get("/", authmiddleware, async (req: Request, res: Response) => {
  const result = await prismaSQLite.request.findMany({
    include: { requestDetails: true },
  });

  res.json({
    data: result,
  });
});

router.get("/:id", authmiddleware, async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await prismaSQLite.request.findFirst({
    where: { id: id as string },
    include: { requestDetails: true },
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

router.get("/data/byId", authmiddleware, async (req: RequestWithDecode, res: Response) => {
  const userId = req.decode.id;

  const result = await prismaSQLite.request.findMany({
    where: { userId: userId as string },
    include: { requestDetails: true },
  });

  if (result.length > 0) {
    res.json({
      data: result,
    });
  } else {
    res.json({
      msg: "data by userId tidak ada",
    });
  }
});


router.get(
  "/detailRequest/:id",
  authmiddleware,
  async (req: Request, res: Response) => {
    const requestId = req.params.id;
    const result = await prismaSQLite.requestDetails.findMany({
      where: { requestId: requestId },
    });

    res.json({
      data: result,
    });
  },
);

router.post(
  "/add",
  authmiddleware,
  async (req: RequestWithDecode, res: Response) => {
    // const parsedData = requestSchema.safeParse(req.body);
    //
    // if (!parsedData.success) {
    //   return res.json({
    //     msg: parsedData.error.errors,
    //   });
    // }

    const userId = req.decode.id;
    const bagian = req.decode.bagian;

    const { tanggal, requestDetails } = req.body;

    const tanggalEpoch = new Date(tanggal).getTime();

    try {
      await prismaSQLite.request.create({
        data: {
          tanggal: tanggalEpoch.toString(),
          userId: userId,
          bagian: bagian,
          status: 0,
          requestDetails: {
            create: requestDetails.map((detail: any) => ({
              jumlah: detail.jumlah,
              barangId: detail.barangId,
            })),
          },
        },
      });

      const idRequest = await prismaSQLite.request.findFirst({
        where: {
          tanggal: tanggalEpoch.toString(),
          userId: userId,
        },
      });

      res.json({
        msg: "request berhasil diajukan",
        nomer: `${idRequest?.id.slice(-4)}/${bagian}`,
      });
    } catch (e) {
      res.json({
        msg: e,
      });
    }
  },
);

router.put(
  "/detailRequest",
  authmiddleware,
  async (req: Request, res: Response) => {
    const { id } = req.query;

    try {
      const result = await prismaSQLite.request.update({
        where: { id: id as string },
        data: {
          status: 1,
        },
      });

      if (result) {
        res.json({
          msg: "status berhasil diubah",
        });
      } else {
        res.json({
          msg: "status gagal diubah",
        });
      }
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
    const { id } = req.params;

    const parsedData = requestSchema.safeParse(req.body);

    if (!parsedData.success) {
      return res.json({
        data: "request tidak ada",
      });
    }

    const { tanggal, requestDetails } = parsedData.data;

    const tanggalEpoch = new Date(tanggal).getTime();

    try {
      // Ambil data request barang dan detailnya yang ada
      const currentRequestBarang = await prismaSQLite.request.findUnique({
        where: { id: id },
        include: { requestDetails: true },
      });

      if (!currentRequestBarang) {
        return res.status(404).json({
          msg: "Request Barang tidak ditemukan",
        });
      }

      // Hapus detail lama
      await prismaSQLite.requestDetails.deleteMany({
        where: { requestId: id },
      });

      // Tambah detail baru
      await prismaSQLite.requestDetails.createMany({
        data: requestDetails.map((detail: any) => ({
          barangId: detail.barangId,
          jumlah: detail.jumlah,
          requestId: id,
        })),
      });

      // Update data request barang
      await prismaSQLite.request.update({
        where: { id: id },
        data: { tanggal: tanggalEpoch.toString() },
      });

      res.status(200).json({
        msg: "Request Barang berhasil diperbarui",
      });
    } catch (e) {
      res.status(500).json({
        msg: e instanceof Error ? e.message : "Terjadi kesalahan",
      });
    }
  },
);

router.put(
  "/:requestId/:barangId",
  authmiddleware,
  async (req: Request, res: Response) => {
    const { requestId, barangId } = req.params;

    const jumlah = req.body.jumlah;

    const result = await prismaSQLite.requestDetails.updateMany({
      where: {
        AND: [{ requestId: requestId }, { barangId: barangId }],
      },
      data: {
        jumlah: jumlah,
      },
    });

    if (result) {
      res.json({
        msg: "update jumlah berhasil",
      });
    } else {
      res.json({
        msg: "update jumlah gagal",
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
      const request = await prismaSQLite.request.findUnique({
        where: { id: id },
        include: { requestDetails: true },
      });

      if (!request) {
        return res.status(404).json({
          msg: "Request Barang not found",
        });
      }

      // Delete the related requestDetails
      await prismaSQLite.requestDetails.deleteMany({
        where: { requestId: id },
      });

      // Delete the request barang entry
      await prismaSQLite.request.delete({
        where: { id: id },
      });

      res.json({
        data: "delete request berhasil",
      });
    } catch (e) {
      res.json({
        msg: e,
      });
    }
  },
);

router.delete(
  "/:requestId/:barangId",
  authmiddleware,
  async (req: Request, res: Response) => {
    const { requestId, barangId } = req.params;

    const result = await prismaSQLite.requestDetails.deleteMany({
      where: {
        requestId: requestId as string,
        barangId: barangId as string,
      },
    });

    if (result) {
      res.json({
        msg: "delete berhasil",
      });
    } else {
      res.json({
        msg: "delete gagal",
      });
    }
  },
);

export default router;
