const crypto = require('crypto');
require('dotenv').config()

function hashPassword(password) {
	const hash = crypto.createHash('md5').update(password).digest("hex");
	return hash;
}

function generateToken() {
	let tokenstage1 = crypto.randomBytes(16).toString('hex')
	let tokenstage2 = crypto.createHash('md5').update(tokenstage1).digest("hex");
	return tokenstage2;
}

module.exports = { hashPassword, generateToken };