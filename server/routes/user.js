import express from "express";
const router = express.Router();
import { login, register, changePassword, resetPassword, fetchAllUser } from "../controller/user.js";

router.get("/", fetchAllUser);
router.post("/login", login);
router.post("/register", register);
router.patch("/changePassword", changePassword);
router.patch("/resetPassword", resetPassword);

export default router;