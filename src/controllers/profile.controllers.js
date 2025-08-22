import { create, edit, getProfiles } from "../services/profile.service.js";

export const createPorfile = async (req, res) => {
	try {
		const profile = await create(req.body);
		res.status(201).json(profile);
	} catch (error) {
		console.error("Error creating profile:", error.code);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const editProfile = async (req, res) => {
	try {
		const profile = await edit(req.body, parseInt(req.params.id));
		res.status(201).json(profile);
	} catch (error) {
		console.error("Error edit profile:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const getProfile = async (req, res) => {
	try {
		const profile = await getProfiles(parseInt(req.params.id));

		if (!profile || profile.length === 0) {
			return res.status(404).json({ error: "Profile not found" });
		}
		res.status(200).json(profile);
	} catch (error) {
		console.error("Error fetching profile:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};
