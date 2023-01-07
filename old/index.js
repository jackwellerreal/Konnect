const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const autoLinker = require('autolinker');
const rateLimit = require("express-rate-limit");
const multer = require('multer');
const crypto = require('crypto');
require('dotenv').config()

const getuser = require('./src/getuser');
const getposts = require('./src/getposts');
const hashpassword = require('./src/hashpassword');
const updateposts = require('./src/updateposts');
const updateusers = require('./src/updateusers');

const app = express();
const upload = multer();
const authTokens = {};

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser());
app.use(upload.array()); 

/* Home */

app.get('/', (req, res) => {
    res.sendFile('/home/index.html', {root: path.join(__dirname, 'public')});
});
app.get('/about', (req, res) => {
    res.sendFile('/home/about/index.html', {root: path.join(__dirname, 'public')});
});
app.get('/about/press', (req, res) => {
    res.sendFile('/home/about/press/index.html', {root: path.join(__dirname, 'public')});
});
app.get('/about/branding', (req, res) => {
    res.sendFile('/home/about/branding/index.html', {root: path.join(__dirname, 'public')});
});
app.get('/about/acknowledgements', (req, res) => {
    res.sendFile('/home/about/acknowledgements/index.html', {root: path.join(__dirname, 'public')});
});
app.get('/support', (req, res) => {
    res.sendFile('/home/support/index.html', {root: path.join(__dirname, 'public')});
});

/* App */

app.get('/app', (req, res) => {
    res.sendFile('/app/index.html', {root: path.join(__dirname, 'public')});
});
app.get('/app/createpost', (req, res) => {
    res.sendFile('/app/create/index.html', {root: path.join(__dirname, 'public')});
});
app.get('/app/news', (req, res) => {
    res.sendFile('/app/news/index.html', {root: path.join(__dirname, 'public')});
});
app.get('/app/messages', (req, res) => {
    res.sendFile('/app/messages/index.html', {root: path.join(__dirname, 'public')});
});
app.get('/app/settings', (req, res) => {
    res.sendFile('/app/settings/index.html', {root: path.join(__dirname, 'public')});
});
app.get('/app/users/:user', (req, res) => {
    res.sendFile('/app/users/index.html', {root: path.join(__dirname, 'public')});
});

/* API */

app.get('/api/getuser', (req, res) => {
    getuser.getUser(req.query.apiKey, req.query.user).then((result) => {res.send(result);})
});
app.get('/api/getusers', (req, res) => {
    getuser.getUsers(req.query.apiKey).then((result) => {res.send(result);})
});
app.get('/api/getposts', (req, res) => {
    getposts.getPosts(req.query.apiKey).then((result) => {res.send(result);})
});
app.get('/api/insertpost', (req, res) => {
    updateposts.insertPost(req.query.apiKey, req.query.username, req.query.content).then((result) => {res.send(result);})
});
app.get('/api/insertnews', (req, res) => {
    updateposts.insertNews(req.query.apiKey, req.query.content).then((result) => {res.send(result);})
});
app.get('/api/insertuser', (req, res) => {
    updateusers.insertUser(req.query.apiKey, req.query.username, req.query.email, req.query.password).then((result) => {res.send(result);})
});
app.get('/api/updateuser', (req, res) => {
    updateusers.updateUser(req.query.apiKey, req.query.username, req.query.email, req.query.password, req.query.displayname, req.query.bio).then((result) => {res.send(result);})
});
app.get('/api/deleteuser', (req, res) => {
    updateusers.deleteUser(req.query.apiKey, req.query.username).then((result) => {res.send(result);})
});

/* Auth */

app.get('/signup', (req, res) => {
    res.sendFile('/auth/signup.html', {root: path.join(__dirname, 'public')});
});
app.post('/signup', (req, res) => {
    getuser.getUsers(process.env.API_KEY).then((result) => {
        if (result.includes(req.body.username)) {
            res.redirect('/login?error=aae');
        } else {
            updateusers.insertUser(process.env.API_KEY, req.body.username, req.body.email, hashpassword.hashPassword(req.body.password), hashpassword.generateToken(req.body.username)).then((result) => {
                res.redirect('/app');
            })
        }
    })
});

app.get('/login', (req, res) => {
    res.send('coming soon™')
    //res.sendFile('/auth/login.html', {root: path.join(__dirname, 'public')});
});
/*
app.post('/login', (req, res) => {
    getuser.getUsers().then((result) => {
        if (result.includes(req.body.username)) {
            for(let i = 0; i < result.length; i++) {
                getuser.getUser(process.env.API_KEY, result[i]).then((result) => {
                    if (result.credentials.email == req.body.email) {
                        if (hashpassword.hashPassword(req.body.password) == result.credentials.password) {
                            res.cookie('token', result.credentials.token);
                            res.redirect('/app');
                        } else {
                            res.redirect('/login?error=ieop');
                        }
                    } else {
                        res.redirect('/login?error=ieop');
                    }
                })
            }
        } else {
            res.redirect('/login?error=adne');
        }
    })
});
*/

app.post('/createpost', (req, res) => {
    getuser.getUsers().then((result) => {
        for(let i = 0; i < result.length; i++) {
            getuser.getUser(process.env.API_KEY, result[i]).then((result) => {
                if (result.credentials.token == req.cookies.token) {
                    console.log(req.body)
                    updateposts.insertPost(process.env.API_KEY, req.body.username, autoLinker.link(req.body.content, { newWindow: true, className: ''}))
                    res.redirect('/app')
                }
            })
        }
    })
})

app.listen(process.env.PORT || 3001 , () => console.log('Server started on port 3000: http://localhost:3000'));