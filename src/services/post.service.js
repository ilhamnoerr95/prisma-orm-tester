import prisma from "../utils/prisma.js";
import { create as createCategoryOnPost } from "./categoryOnPost.service.js";

export const create = async (params) => {
	const { title, content, published, author, category } = params; // typo fixed
	const data = await prisma.$transaction(async (tx) => {
		const post = await tx.post.create({
			data: {
				title,
				content,
				published,
				authorId: author.id,
			},
		});

		await tx.postCategories.create({
			data: {
				postId: post.id,
				categoryId: category.id,
				assignedBy: author.username,
			},
		});

		return post;
	});
	console.log("Post created:", data);
	return data; // return data, don't send response here
};
export const getAll = async () => {
	return prisma.post.findMany();
};
