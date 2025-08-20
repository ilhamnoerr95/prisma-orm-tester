import express from "express";
const router = express.Router();
import {
	CreateCategory,
	getAllCategories,
} from "../controllers/category.controllers.js";

router.post("/create-category", CreateCategory);
router.get("/", getAllCategories); // Assuming you have a getAllCategories function

export default router;
