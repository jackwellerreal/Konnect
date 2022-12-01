const { v4: uuidv4, validate: uuidValidate } = require('uuid');
require('dotenv').config()

const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

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