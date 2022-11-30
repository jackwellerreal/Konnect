/**
get all users from the mongodb database and return them as JSON objects
this is used by the api to get info on certain users
*/
const validateApiKey = require('./validateapikey.js');
require('dotenv').config()

const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function getUsers(apiKey, username) {
    if (validateApiKey(apiKey) == true) {
        await client.connect();
        const db = client.db('konnect');
        const collection = db.collection('users');
        
        for await (let user of collection.find()) {
            if (username == null) {
                return collection.find();
            } else {
                if (user.username == username) {
                    return user;
                } else {
                    return "Invalid user";
                }
            }
        }
    } else {
        return "Invalid API key";
    }
}

module.exports = getUsers;
