const validateApiKey = require('./validateapikey.js');
const moment = require('moment');
require('dotenv').config()

const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function insertUser(apiKey, username, email, password, token) {
    if (validateApiKey(apiKey)) {
        await client.connect();
        const db = client.db('konnect');
        const collection = db.collection('users');
        
        for await (let user of collection.find()) {
            if (user.username == username) {
                return "User already exists";
            } else {
                collection.insertOne({
                    "type":"user",
                    "displayname":username,
                    "username":username,
                    "bio":"",
                    "verified":false,
                    "credentials":{
                        "email":email,
                        "password":password,
                        "token":token
                    }
                });
                return "User inserted";
            }
        }

        await client.close();
    } else {
        return "Invalid API key";
    }
}

async function updateUser(apiKey, username, email, password, displayname, bio) {
    if (validateApiKey(apiKey)) {
        await client.connect();
        const db = client.db('konnect');
        const collection = db.collection('users');
        
        for await (let user of collection.find()) {
            if (user.username == username) {
                user.credentials.email = email;
                user.credentials.password = password;
                if(displayname != "") {user.displayname = displayname};
                if(bio != "") {user.bio = bio}
                collection.updateOne({ username: username },{ $set: { credentials: user.credentials } });
                return "User updated";
            }
        }

        await client.close();
    } else {
        return "Invalid API key";
    }
}

async function updateUserToken(apiKey, username, token) {
    if (validateApiKey(apiKey)) {
        await client.connect();
        const db = client.db('konnect');
        const collection = db.collection('users');
        
        for await (let user of collection.find()) {
            if (user.username == username) {
                user.credentials.token = token; 
                collection.updateOne({ $set: { credentials: user.credentials } });
                return "User updated";
            }
        }

        await client.close();
    } else {
        return "Invalid API key";
    }
}

async function deleteUser(apiKey, username) {
    if (validateApiKey(apiKey)) {
        await client.connect();
        const db = client.db('konnect');
        const collection = db.collection('users');
        
        for await (let user of collection.find()) {
            if (user.username == username) {
                collection.deleteOne({ username: username });
                return "User deleted";
            } else {
                return "User does not exist";
            }
        }

        await client.close();
    } else {
        return "Invalid API key";
    }
}

module.exports = { insertUser, updateUser, updateUserToken, deleteUser };