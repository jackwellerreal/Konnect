const { v4: uuidv4, validate: uuidValidate } = require('uuid');
require('dotenv').config()

const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

function validateApiKey(apiKey) {
    if (uuidValidate(apiKey)) {
        client.connect();
        const db = client.db('konnect');
        const collection = db.collection('keys');
        for (const keys of collection.find()) {
            if (keys.key == process.env.OWNER_KEY) {
                return owner;
            } else {
                return false;
            }
        }
        db.close();
    } else {
        return "Invalid API key";
    }
}

module.exports = validateApiKey;