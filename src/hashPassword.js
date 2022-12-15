var crypto = require('crypto');
require('dotenv').config()

function hashPassword(password) {
	const hash = crypto.createHash('md5').update(password).digest("hex");
	return hash;
}
function authToken() {
	const token = crypto.randomBytes(30).toString('hex');
	return token;
}

module.exports = { hashPassword, authToken };