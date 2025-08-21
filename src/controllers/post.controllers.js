import { getAll, create, userPost, getPost } from "../services/post.service.js";

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

export const getAllPosts = async (req, res) => {
	try {
		const posts = await getAll();
		res.status(200).json(posts);
	} catch (error) {
		console.error("Error fetching posts:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const getUserPost = async (req, res) => {
	try {
		const post = await userPost(parseInt(req.params.id));
		if (!post) {
			return res.status(404).json({ error: "Post not found" });
		}
		res.status(200).json(post);
	} catch (error) {
		console.error("Error fetching post:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const getPerPost = async (req, res) => {
	try {
		const post = await getPost(parseInt(req.params.id));
		if (!post) {
			return res.status(404).json({ error: "Post not found" });
		}
		res.status(200).json(post);
	} catch (error) {
		console.error("Error fetching post:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};
