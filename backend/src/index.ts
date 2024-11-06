import express from "express";
import cors from "cors";
import indexEndpoint from "./routes/index";
import cookieParser from "cookie-parser";
import swaggerui from "swagger-ui-express";
import { swaggerDocument } from "./swagger";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  }),
);
app.use("/api-docs", swaggerui.serve, swaggerui.setup(swaggerDocument));

const port = 3200;

app.get("/", (_req, res) => {
  res.json({
    msg: "server up",
  });
});

app.use("/api/v1", indexEndpoint);

app.listen(port, () => {
  console.log(`server up at ${port}`);
});
