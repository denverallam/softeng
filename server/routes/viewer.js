import express from "express";
const router = express.Router();
import { viewerLogin } from "../controller/viewer.js";

router.post("/login", viewerLogin);

export default router;