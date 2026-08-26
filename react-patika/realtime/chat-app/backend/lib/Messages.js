const shortid = require("shortid");
const _ = require("lodash");
const redisClient = require("../clients/redis");

function Messages() {
	this.client = redisClient.getClient();
}

module.exports = new Messages();

Messages.prototype.upsert = function ({ message }) {
	this.client.hset(
		"messages",
		shortid.generate(),
		JSON.stringify({
			message,
			when: Date.now(),
		}),
		(err) => {
			if (err) {
				console.error(err);
			}
		}
	);
};

Messages.prototype.list = function (callback) {
	let messageList = [];

	this.client.hgetall("messages", function (err, messages) {
		if (err) {
			console.error(err);
			return callback([]);
		}

		for (let message in messages) {
			messageList.push(JSON.parse(messages[message]));
		}

		return callback(_.orderBy(messageList, "when", "asc"));
	});
};
