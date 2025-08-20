import prisma from "../utils/prisma.js";

export const create = async (body) => {
	return prisma.postCategories.create({
		data: body,
	});
};
