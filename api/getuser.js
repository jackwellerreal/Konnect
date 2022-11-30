/**
get all users from the mongodb database and return them as JSON objects
this is used by the api to get info on certain users
*/
const validateApiKey = require('./validateapikey.js');
require('dotenv').config()

const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

function initPromise() {
    return new Promise(function(res, rej) {
        res("initResolve");
    })
}

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

async function getUsers(apiKey) {
    if (validateApiKey(apiKey)) {
        await client.connect();
        const db = client.db('konnect');
        const collection = db.collection('users');
        
        var users = [];
        for await (let user of collection.find()) {
            users.push(user.username);
        }

        await client.close();
        return users;
    } else {
        return "Invalid API key";
    }
}

module.exports = getUser, getUsers;
