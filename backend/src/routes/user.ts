import express from "express";
import { z } from "zod";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prismaPostgres from "../utils/db-postgres";
import limiter from "../middlewares/rateLimiter";
import sendOTPEmail from "../mail";
import authmiddleware from "../middlewares/authmiddleware";

const router = express.Router();

const jwtPassword: any = process.env.JWT_SECRET;

const { otpLimiter, passwordResetLimiter } = limiter;

const signupSchema = z.object({
  name: z.string(),
  nip: z.string(),
  bagian: z.string(),
  isAdmin: z.optional(z.boolean()),
  password: z.string(),
  email: z.string(),
});

const loginSchema = z.object({
  nip: z.string(),
  password: z.string(),
});

type Signup = z.infer<typeof signupSchema>;

type Login = z.infer<typeof loginSchema>;

router.get("/", authmiddleware, async (req, res) => {
  const { userId } = req.query;

  const dataUser = await prismaPostgres.user.findFirst({
    where: { id: userId as string },
    select: {
      id: true,
      name: true,
      bagian: true,
    },
  });
  if (dataUser) {
    res.json({
      data: dataUser,
    });
  } else {
    res.json({
      msg: "error",
    });
  }
});

router.post("/signup", async (req, res) => {
  const { name, nip, bagian, password, email }: Signup = req.body;
  try {
    const signupFormat = signupSchema.safeParse(req.body);
    if (signupFormat.success) {
      const dataUser = await prismaPostgres.user.findFirst({
        where: { nip },
      });
      if (dataUser) {
        return res.json({
          msg: "nip sudah terdaftar",
        });
      }

      const hashPassword: string = await bcrypt.hash(password, 10);

      let isAdmin: boolean = true;
      bagian.toLowerCase() == "umum" ? (isAdmin = true) : (isAdmin = false);

      await prismaPostgres.user.create({
        data: {
          name: name.toLowerCase(),
          nip: nip,
          bagian: bagian.toLowerCase(),
          isAdmin: isAdmin,
          password: hashPassword,
          email: email,
        },
      });

      res.json({
        msg: "user berhasil ditambah",
      });
    } else {
      res.json({
        msg: signupFormat.error.errors,
      });
    }
  } catch (e) {
    res.json({
      msg: e,
    });
  }
});

router.post("/signin", async (req, res) => {
  const { nip, password }: Login = req.body;
  const loginFormat = loginSchema.safeParse(req.body);

  try {
    if (loginFormat.success) {
      const dataUser = await prismaPostgres.user.findFirst({
        where: { nip },
      });
      if (dataUser) {
        const passwordVerif = await bcrypt.compare(password, dataUser.password);
        const id: string = dataUser.id;
        const nip: string = dataUser.nip;
        const isAdmin: boolean = dataUser.isAdmin;
        const bagian: string = dataUser.bagian;
        const email: string = dataUser.email;

        const token: string = jwt.sign(
          { id, nip, isAdmin, bagian, email },
          jwtPassword,
        );

        const fiveDay = 5 * 24 * 60 * 60 * 1000;

        if (passwordVerif) {
          res.cookie("token", token, { maxAge: fiveDay });
          res.json({
            msg: "login berhasil",
          });
        } else {
          res.json({
            msg: "password salah",
          });
        }
      } else {
        res.json({
          msg: "nip salah",
        });
      }
    } else {
      res.json({
        msg: loginFormat.error.errors,
      });
    }
  } catch (e) {
    res.json({
      msg: e,
    });
  }
});

router.post("/signout", (req, res) => {
  res.clearCookie("token");
  res.json({
    msg: "sign out berhasil",
  });
});

const otpStore: Record<string, string> = {};

router.post("/generateOTP", otpLimiter, (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.json({
      msg: "email is required",
    });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  otpStore[email] = otp;

  sendOTPEmail(email, Number(otp));

  res.json({
    msg: "otp send to email",
  });
});

router.post("/resetPassword", passwordResetLimiter, async (req, res) => {
  const { email, otp, newPassword } = req.body;

  if (!email || !otp || !newPassword) {
    return res.json({
      msg: "please fill all form",
    });
  }

  if (Number(otpStore[email]) === Number(otp)) {
    const hashPassword = await bcrypt.hash(newPassword, 10);

    await prismaPostgres.user.update({
      where: {
        email: email,
      },
      data: {
        password: hashPassword,
      },
    });

    delete otpStore[email];

    return res.json({
      msg: "password berhasil diupdate",
    });
  }
});

export default router;
