const validateApiKey = require('./validateapikey.js');
const moment = require('moment');
require('dotenv').config()

const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function getPosts(apiKey) {
    if (validateApiKey(apiKey)) {
        await client.connect();
        const db = client.db('konnect');
        const collection = db.collection('posts');
        
        var posts = [];
        for await (let post of collection.find()) {
            if(post.type == "news"){}
            if(post.type == "post"){
                if(posts.length > 100){}
                if(post.content.length <= 100){
                    posts.push(post);
                }
            }
        }

        await client.close();
        return posts;
    } else {
        return "Invalid API key";
    }
}

module.exports = getPosts;