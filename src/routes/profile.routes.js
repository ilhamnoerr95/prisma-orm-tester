import express from "express";
const router = express.Router();
import {
	createPorfile,
	editProfile,
	getProfile,
} from "../controllers/profile.controllers.js";

router.post("/create-profile", createPorfile);
router.put("/edit-profile/:id", editProfile);
router.get("/:id", getProfile);

export default router;
