const validateApiKey = require('./validateapikey.js');
const moment = require('moment');
require('dotenv').config()

const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function getUser(apiKey, username) {
    if (validateApiKey(apiKey)) {
        await client.connect();
        const db = client.db('konnect');
        const collection = db.collection('users');
        
        for await (let user of collection.find()) {
            if (user.username == username) {
                return user;
            }
        }

        await client.close();
    } else {
        return "Invalid API key";
    }
}

async function getUsers() {
    await client.connect();
    const db = client.db('konnect');
    const collection = db.collection('users');
        
    var users = [];
    for await (let user of collection.find()) {
        users.push(user.username);
    }

    await client.close();
    return users;
}

module.exports = { getUser, getUsers };