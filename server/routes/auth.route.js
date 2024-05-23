import express from "express";
import Auth from "../controllers/auth.controller.js";

const router = express.Router();
router.post("/signup", Auth.signUp);
router.post("/signin", Auth.signIn);
export default router;
