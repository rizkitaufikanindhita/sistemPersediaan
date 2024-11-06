import express from "express";
import userEndpoint from "./user";
import barangEndpoint from "./barang";
import inputBarangEndpoint from "./inputBarang";
import outputBarangEndpoint from "./outputBarang";
import requestEndpoint from "./request";

const router = express.Router();

router.use("/user", userEndpoint);
router.use("/barang", barangEndpoint);
router.use("/input", inputBarangEndpoint);
router.use("/output", outputBarangEndpoint);
router.use("/request", requestEndpoint);

export default router;
