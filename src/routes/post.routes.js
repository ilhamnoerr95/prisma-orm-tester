import express from "express";
const router = express.Router();
import { createPost } from "../controllers/post.controllers.js";

router.post("/create-post", createPost);

export default router;
