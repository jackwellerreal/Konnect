var crypto = require('crypto');
require('dotenv').config()

function hashPassword(password) {
	const hash = crypto.createHash('md5').update(password).digest("hex");
	return hash;
}

module.exports = hashPassword;