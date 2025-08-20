import express from "express";
const router = express.Router();
import { CreateUser, getAllUsers } from "../controllers/user.controllers.js";

router.post("/create-user", CreateUser);
router.get("/", getAllUsers); // Assuming you have a getAllUsers function

export default router;
