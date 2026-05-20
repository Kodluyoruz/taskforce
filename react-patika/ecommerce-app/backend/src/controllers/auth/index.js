import Boom from "boom";
import User from "../../models/user";

// helpers
import {
	signAccessToken,
	signRefreshToken,
	verifyRefreshToken,
} from "../../helpers/jwt";

// validations
import ValidationSchema from "./validations";
import redis from "../../clients/redis";

const Register = async (req, res, next) => {
	const input = req.body;

	const { error } = ValidationSchema.validate(input);

	if (error) {
		return next(Boom.badRequest(error.details[0].message));
	}

	try {
		const isExists = await User.findOne({ email: input.email });

		if (isExists) {
			return next(Boom.conflict("This e-mail already using."));
		}

		const user = new User(input);
		const data = await user.save();
		const userData = data.toObject();

		delete userData.password;
		delete userData.__v;

		const accessToken = await signAccessToken({
			user_id: user._id,
			role: user.role,
		});
		const refreshToken = await signRefreshToken(user._id);

		res.json({
			user: userData,
			accessToken,
			refreshToken,
		});
	} catch (e) {
		next(e);
	}
};

const Login = async (req, res, next) => {
	const input = req.body;

	const { error } = ValidationSchema.validate(input);

	if (error) {
		return next(Boom.badRequest(error.details[0].message));
	}

	try {
		const user = await User.findOne({ email: input.email });

		if (!user) {
			throw Boom.notFound("The email address was not found.");
		}

		const isMatched = await user.isValidPass(input.password);
		if (!isMatched) {
			throw Boom.unauthorized("email or password not correct");
		}

		const accessToken = await signAccessToken({
			user_id: user._id,
			role: user.role,
		});
		const refreshToken = await signRefreshToken(user._id);

		const userData = user.toObject();
		delete userData.password;
		delete userData.__v;

		res.json({ user: userData, accessToken, refreshToken });
	} catch (e) {
		return next(e);
	}
};

const RefreshToken = async (req, res, next) => {
	const { refresh_token } = req.body;

	try {
		if (!refresh_token) {
			throw Boom.badRequest();
		}

		const user_id = await verifyRefreshToken(refresh_token);
		const accessToken = await signAccessToken(user_id);
		const refreshToken = await signRefreshToken(user_id);

		res.json({ accessToken, refreshToken });
	} catch (e) {
		next(e);
	}
};

const Logout = async (req, res, next) => {
	try {
		const { refresh_token } = req.body;
		if (!refresh_token) {
			throw Boom.badRequest();
		}

		const user_id = await verifyRefreshToken(refresh_token);
		const data = await redis.del(user_id);

		if (!data) {
			throw Boom.badRequest();
		}

		res.json({ message: "success" });
	} catch (e) {
		console.log(e);
		return next(e);
	}
};

const Me = async (req, res, next) => {
	const { user_id } = req.payload;

	try {
		const user = await User.findById(user_id).select("-password -__v");

		res.json(user);
	} catch (e) {
		next(e);
	}
};

export default {
	Register,
	Login,
	RefreshToken,
	Logout,
	Me,
};
