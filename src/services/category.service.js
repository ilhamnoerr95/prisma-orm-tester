import prisma from "../utils/prisma.js";

const create = async (body) => {
	return await prisma.category.create({
		data: body,
	});
};
const getAll = async () => {
	return prisma.category.findMany();
};

export { create, getAll };
