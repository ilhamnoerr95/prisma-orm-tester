import { create, getAll } from "../services/category.service.js";

export const CreateCategory = async (req, res) => {
	try {
		const user = await create(req.body);
		res.status(201).json(user);
	} catch (error) {
		console.error("Error creating category:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const getAllCategories = async (req, res) => {
	try {
		const users = await getAll();
		res.status(200).json(users);
	} catch (error) {
		console.error("Error fetching users:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};
