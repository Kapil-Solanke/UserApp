const User = require("../models/User");
exports.getUser = async (req, res) => {
	try {
		const userData = await User.find({});
		res.json({ success: true, data: userData });
	} catch (error) {
		res.status(500).json({ success: false, error: error });
	}
};
exports.getUserbyEmail = async (req, res) => {
	try {
		const { name, email } = req.body;
		if (!name || !email ) {
		console.log("not all fields...");
		return res.status(400).json({
			status: 400,
			message: "Please fill all fields",
		});
		}
		const userData = await User.find({email:email});
		res.json({ success: true, data: userData });
	} catch (error) {
		res.status(500).json({ success: false, error: error });
	}
};


