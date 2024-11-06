import jwt from "jsonwebtoken";
import prismaPostgres from "../utils/db-postgres";
import { Request, Response, NextFunction } from "express";

const jwtPassword: any = process.env.JWT_SECRET;

interface AdminRequest extends Request {
  decode?: any; // Optional property to allow for undefined
}

const adminmiddleware = async (
  req: AdminRequest,
  res: Response,
  next: NextFunction,
) => {
  const token: any = req.headers.authorization;
  if (!token) {
    res.json({
      msg: "token not provided",
    });
  } else {
    try {
      const decode: any = jwt.verify(token, jwtPassword);

      const nip = decode.nip;
      const userData = await prismaPostgres.user.findFirst({ where: { nip } });

      if (userData?.isAdmin == true) {
        req.decode = decode;
        next();
      } else {
        res.json({
          msg: "anda bukan admin",
        });
      }
    } catch (e) {
      console.error(e);
    }
  }
};

export default adminmiddleware;
