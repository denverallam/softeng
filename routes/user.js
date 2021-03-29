import express from "express";
const router = express.Router();

import { login, register, changePassword, resetPassword } from "../controllers/user.js";

router.post("/login", login);
router.post("/register", register);
router.patch("/changePassword", changePassword);
router.patch("/resetPassword", resetPassword);

export default router;