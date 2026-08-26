import JWT from "jsonwebtoken";
import Boom from "boom";

import redis from "../clients/redis";

const signAccessToken = (data) => {
	return new Promise((resolve, reject) => {
		const payload = {
			...data,
		};

		const options = {
			expiresIn: "10d",
			issuer: "ecommerce.app",
		};

		JWT.sign(payload, process.env.JWT_SECRET, options, (err, token) => {
			if (err) {
				console.log(err);
				reject(Boom.internal());
			}

			resolve(token);
		});
	});
};

const verifyAccessToken = (req, res, next) => {
	const authorizationToken = req.headers["authorization"];
	if (!authorizationToken) {
		next(Boom.unauthorized());
	}

	JWT.verify(authorizationToken, process.env.JWT_SECRET, (err, payload) => {
		if (err) {
			return next(
				Boom.unauthorized(
					err.name === "JsonWebTokenError" ? "Unauthorized" : err.message
				)
			);
		}

		req.payload = payload;
		next();
	});
};

const signRefreshToken = (user_id) => {
	return new Promise((resolve, reject) => {
		const payload = {
			user_id,
		};
		const options = {
			expiresIn: "180d",
			issuer: "ecommerce.app",
		};

		JWT.sign(payload, process.env.JWT_REFRESH_SECRET, options, (err, token) => {
			if (err) {
				console.log(err);
				reject(Boom.internal());
			}

			redis.set(user_id, token, "EX", 180 * 24 * 60 * 60);

			resolve(token);
		});
	});
};

const verifyRefreshToken = async (refresh_token) => {
	return new Promise(async (resolve, reject) => {
		JWT.verify(
			refresh_token,
			process.env.JWT_REFRESH_SECRET,
			async (err, payload) => {
				if (err) {
					return reject(Boom.unauthorized());
				}

				const { user_id } = payload;
				const user_token = await redis.get(user_id);

				if (!user_token) {
					return reject(Boom.unauthorized());
				}

				if (refresh_token === user_token) {
					return resolve(user_id);
				}
			}
		);
	});
};

export {
	signAccessToken,
	verifyAccessToken,
	signRefreshToken,
	verifyRefreshToken,
};
