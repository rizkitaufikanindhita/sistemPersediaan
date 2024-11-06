import express, { Request, Response } from "express";
import adminmiddleware from "../middlewares/adminmiddleware";
import authmiddleware from "../middlewares/authmiddleware";
import prismaPostgres from "../utils/db-postgres";
import { z } from "zod";
import supabase from "../utils/supabaseClient";
import multer from "multer";

const router = express.Router();

const barangSchema = z.object({
  namaBarang: z.string(),
  satuanBarang: z.string(),
  gambarUrl: z.string().optional(),
  kategori: z.string(),
});

type barangType = z.infer<typeof barangSchema>;

interface RequestWithDecode extends Request {
  decode?: any;
}

router.get("/:id", authmiddleware, async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const referensi = await prismaPostgres.barang.findUnique({
      where: { id: id },
      include: {
        inputBarangDetails: true,
        outputBarangDetails: {
          include: {
            outputBarang: true
          }
        }
      }
    });
    res.json({
      data: referensi,
    });
  } catch (e) {
    res.json({
      msg: e,
    });
  }
});

// upload image
const upload = multer({ storage: multer.memoryStorage() });

router.post(
  "/upload",
  adminmiddleware,
  upload.single("gambar"),
  async (req: Request, res: Response) => {
    try {
      const file = req.file;
      if (!file) {
        return res.json({
          msg: "no file uploaded",
        });
      }

      // define path dan name
      const filePath = `images/${Date.now()}-${file.originalname}`;

      // upload to supabase
      const { error } = await supabase.storage
        .from("barang-image")
        .upload(filePath, file.buffer, {
          contentType: file.mimetype,
        });

      if (error) {
        return res.json({
          msg: error,
        });
      }

      // get gambarUrl
      const { data } = supabase.storage
        .from("barang-image")
        .getPublicUrl(filePath);

      if (!data) {
        return res.json({
          msg: "error get url",
        });
      }

      res.json({
        gambarUrl: data.publicUrl,
      });
    } catch (e) {
      res.json({
        msg: e,
      });
    }
  },
);

router.post("/add", adminmiddleware, async (req, res) => {
  const { namaBarang, satuanBarang, gambarUrl, kategori }: barangType =
    req.body;

  const referensiFormat = barangSchema.safeParse(req.body);

  if (referensiFormat.success) {
    await prismaPostgres.barang.create({
      data: {
        namaBarang: namaBarang.toLowerCase(),
        satuanBarang: satuanBarang.toLowerCase(),
        gambarUrl: gambarUrl ? gambarUrl : null,
        kategori: kategori.toLowerCase(),
      },
    });

    res.json({
      msg: "barang berhasil diinput",
    });
  } else {
    res.json({
      msg: referensiFormat.error.errors,
    });
  }
});

type updateBarangOptional = Partial<barangType>;

router.put("/:id", adminmiddleware, async (req, res) => {
  const { id } = req.params;

  const inputUpdate: updateBarangOptional = req.body;

  const { namaBarang, satuanBarang, kategori } = inputUpdate;
  try {
    await prismaPostgres.barang.update({
      where: {
        id: id,
      },
      data: {
        namaBarang: namaBarang,
        satuanBarang: satuanBarang,
        kategori: kategori,
      },
    });
    res.json({
      msg: "barang berhasil diupdate",
    });
  } catch (e) {
    res.json({
      msg: e,
    });
  }
});

router.delete("/:id", adminmiddleware, async (req, res) => {
  const { id } = req.params;

  try {
    await prismaPostgres.barang.delete({
      where: {
        id: id,
      },
    });
    res.json({
      msg: "delete barang berhasil",
    });
  } catch (e) {
    res.json({
      msg: e,
    });
  }
});

router.get("/data/bulk", authmiddleware, async (req: RequestWithDecode, res) => {
  const filterHasil = req.query.filter || "";
  const filter = filterHasil.toString();

  const isAdmin = req.decode?.isAdmin;

  try {
    if (filter) {
      const result = await prismaPostgres.barang.findMany({
        where: {
          namaBarang: {
            contains: filter,
            mode: "insensitive",
          },
        },
      });
      res.json({
        data: result,
      });
    } else {
      if (isAdmin) {
        const result = await prismaPostgres.barang.findMany({});
        res.json({
          data: result,
        });
      } else {
        const result = await prismaPostgres.barang.findMany({
          where: {},
          select: {
            id: true,
            namaBarang: true,
            satuanBarang: true,
          },
        });
        res.json({
          data: result,
        });
      }
    }
  } catch (e) {
    res.json({
      msg: `ada error ${e}`,
    });
  }
});

export default router;
