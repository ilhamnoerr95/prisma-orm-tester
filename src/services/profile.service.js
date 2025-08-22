import prisma from "../utils/prisma.js";

export const create = async (body) => {
	return prisma.profile.create({
		data: body,
	});
};

export const edit = async (body, id) => {
	// await prisma.profile
	// 	.findFirst({ where: { id } })
	// 	.then((profile) => {
	// 		if (!profile) {
	// 			return Promise.reject("Profile not found");
	// 		}
	// 	})
	// 	.catch((error) => {
	// 		console.error("Error finding profile:", error);
	// 		throw error;
	// 	});
	return await prisma.profile.update({
		where: { id },
		data: body,
	});
};

export const getProfiles = async (id) => {
	const data = await prisma.profile.findMany({
		where: { id },
		select: {
			firstName: true,
			lastName: true,
			email: true,
			user: {
				select: {
					username: true,
				},
			},
		},
	});

	if (!data || data.length === 0) {
		console.log("No profiles found");
		return [];
	}

	return data;
};
