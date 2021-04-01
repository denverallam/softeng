import express from "express";
const router = express.Router();
import { login, register, changePassword, resetPassword, forgotPassword, fetchAllUser } from "../controller/user.js";

router.get("/", fetchAllUser);
router.post("/login", login);
router.post("/register", register);
router.patch("/changePassword", changePassword);
router.post("/forgotPassword", forgotPassword)
router.patch("/resetPassword/:resetToken", resetPassword);

export default router;