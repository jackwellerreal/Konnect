/**
get all users from the mongodb database and return them as JSON objects
this is used by the api to get info on certain users
*/
const validateApiKey = require('./validateapikey.js');
require('dotenv').config()

const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function getUsers(username, apiKey) {
    if (validateApiKey(apiKey) == true) {
        await client.connect();
        const db = client.db('konnect');
        const collection = db.collection('users');
        for await (const user of collection.find()) {
            if (user.username == username) {
                return user;
            }
        }

        const query = {};
        const cursor = collection.find(query).sort({ _id: -1 }).limit(1);
        const posts = await cursor.toArray();
        db.close();
        return posts;
    } else {
        return "Invalid API key";
    }
}

module.exports = getUsers;