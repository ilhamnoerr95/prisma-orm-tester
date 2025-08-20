import { getAll, create } from "../services/post.service.js";

export const createPost = async (req, res) => {
	try {
		console.log(req.body);
		const post = await create(req.body);
		res.status(201).json(post);
	} catch (error) {
		console.error("Error creating post:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};
