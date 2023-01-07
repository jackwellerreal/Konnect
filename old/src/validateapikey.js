const { v4: uuidv4, validate: uuidValidate } = require('uuid');
require('dotenv').config()

function validateApiKey(apiKey) {
    if (uuidValidate(apiKey)) {
        if (apiKey == process.env.OWNER_KEY) {
            return true
        } else {
            return "Invalid API key";
        }
    } else {
        return "Invalid API key";
    }
}

module.exports = validateApiKey;