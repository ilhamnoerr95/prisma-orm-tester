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

	return data; // return data, don't send response here
};
export const getAll = async () => {
	// ambil post + author (user) + categories (lewat join table)

	const data = await prisma.user.findMany({
		select: {
			username: true,
			Posts: {
				// ⚠️ di schema kamu namanya "Posts" (kapital). Kalau diganti "posts" lebih konvensional.
				select: {
					id: true,
					title: true,
					content: true,
					published: true,
					postCategories: {
						select: { category: { select: { name: true } }, assignedBy: true },
					},
				},
			},
		},
	});

	// flatten ke bentuk flat seperti SQL
	const flat = data.flatMap((u) =>
		u.Posts.flatMap((p) =>
			p.postCategories.map((pc) => ({
				postId: p.id,
				assignedBy: pc.assignedBy,
				title: p.title,
				content: p.content,
				published: p.published,
				category_name: pc.category.name,
			})),
		),
	);
	console.table(flat);
	console.log(data);

	return data;
};

export const userPost = async (id) => {
	const post = await prisma.user.findUnique({
		where: { id },
		select: {
			username: true,
			Posts: {
				// ⚠️ di schema kamu namanya "Posts" (kapital). Kalau diganti "posts" lebih konvensional.
				select: {
					id: true,
					title: true,
					content: true,
					published: true,
					postCategories: {
						select: { category: { select: { name: true } }, assignedBy: true },
					},
				},
			},
		},
	});

	return post;
};

export const getPost = async (id) => {
	const post = await prisma.post.findUnique({
		where: { id },
		select: {
			// ⚠️ di schema kamu namanya "Posts" (kapital). Kalau diganti "posts" lebih konvensional.
			id: true,
			title: true,
			content: true,
			published: true,
			postCategories: {
				select: { category: { select: { name: true } }, assignedBy: true },
			},
		},
	});

	return post;
};
