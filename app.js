import users from "./src/routes/user.routes.js";
import categories from "./src/routes/categories.routes.js";
import posts from "./src/routes/post.routes.js";
import profile from "./src/routes/profile.routes.js";
import { prisma } from "./src/utils/prisma.js";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", users);
app.use("/categories", categories);
app.use("/posts", posts);
app.use("/profile", profile);

const start = async () => {
	try {
		await prisma.$connect();
		console.log("✅ Prisma connected to database");

		app.get("/", async (req, res) => {
			res.send("Server running, Prisma connected");
		});
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	} catch (error) {
		console.error("❌ Failed to connect to database:", error);
		process.exit(1); // hentikan server kalau DB gagal connect
	}
};
start();
