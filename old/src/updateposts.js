const validateApiKey = require('./validateapikey.js');
const moment = require('moment');
require('dotenv').config()

const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function insertPost(apiKey, username, content) {
    if (validateApiKey(apiKey)) {
        await client.connect();
        const db = client.db('konnect');
        const collection = db.collection('posts');
        
        for await (let post of collection.find()) {
            if (post.content == post) {
                return "Post already exists";
            } else {
                collection.insertOne({
                    "content":content,
                    "author":username,
                    "date":moment().format('H:MM DD/MM/YYYY'),
                    "type":"post"
                });
                return "Post inserted";
            }
        }
    } else {
        return "Invalid API key";
    }
}

async function insertNews(apiKey, content) {
    if (validateApiKey(apiKey)) {
        await client.connect();
        const db = client.db('konnect');
        const collection = db.collection('users');
        
        for await (let post of collection.find()) {
            if (post.content == post) {
                return "Post already exists";
            } else {
                collection.insertOne({
                    "content":content,
                    "author":"news",
                    "date":moment().format('H:MM A  DD/MM/YYYY'),
                    "type":"news"
                });
                return "Post inserted";
            }
        }

        await client.close();
    } else {
        return "Invalid API key";
    }
}

module.exports = { insertPost, insertNews };