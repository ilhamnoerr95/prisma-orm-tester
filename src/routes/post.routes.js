import express from "express";
const router = express.Router();
import {
	createPost,
	getAllPosts,
	getUserPost,
	getPerPost,
} from "../controllers/post.controllers.js";

router.post("/create-post", createPost);
router.get("/", getAllPosts);
router.get("/user-post/:id", getUserPost); // Assuming you have a getUserPost function in your controller
router.get("/:id", getPerPost); // Assuming you have a getUserPost function in your controller

export default router;
