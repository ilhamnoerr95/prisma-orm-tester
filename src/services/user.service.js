import prisma from "../utils/prisma.js";

const create = async (body) => {
	return prisma.user.create({
		data: body,
	});
};
const getAll = async () => {
	return prisma.user.findMany();
};

export { create, getAll };
