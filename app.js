import users from "./src/routes/user.routes.js";
import categories from "./src/routes/categories.routes.js";
import posts from "./src/routes/post.routes.js";

import express from "express";
import dotenv from "dotenv";
// import { PrismaClient } from "./generated/prisma/client";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", users);
app.use("/categories", categories);
app.use("/posts", posts);

// app.post("/users", async (req, res) => {
// 	const prisma = new PrismaClient();
// 	try {
// 		const { username, password } = req.body;
// 		const user = await prisma.user.create({
// 			data: {
// 				username,
// 				password,
// 			},
// 		});
// 		res.status(201).json(user);
// 	} catch (error) {
// 		console.error("Error creating user:", error);
// 		res.status(500).json({ error: "Internal Server Error" });
// 	} finally {
// 		await prisma.$disconnect();
// 	}
// });

const start = () => {
	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
	});
};
start();
