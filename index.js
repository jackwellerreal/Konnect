const express = require('express');
const axios = require('axios');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const crypto = require('crypto');
require('dotenv').config()

const getuser = require('./src/getuser');
const getposts = require('./src/getposts');
const hashpassword = require('./src/hashpassword');
const updateposts = require('./src/updateposts');
const updateusers = require('./src/updateusers');
const validateApiKey = require('./src/validateapikey');

const app = express();
const authTokens = {};

app.use(express.static(__dirname + '/public'));

/* Home */

app.get('/', (req, res) => {
    res.sendFile('home/index.html', {root: path.join(__dirname, 'public')});
});
app.get('/about', (req, res) => {
    res.sendFile('home/about/index.html', {root: path.join(__dirname, 'public')});
});
app.get('/about/press', (req, res) => {
    res.sendFile('home/about/press/index.html', {root: path.join(__dirname, 'public')});
});
app.get('/about/branding', (req, res) => {
    res.sendFile('home/about/branding/index.html', {root: path.join(__dirname, 'public')});
});
app.get('/about/acknowledgements', (req, res) => {
    res.sendFile('home/about/acknowledgements/index.html', {root: path.join(__dirname, 'public')});
});
app.get('/support', (req, res) => {
    res.sendFile('home/support/index.html', {root: path.join(__dirname, 'public')});
});
app.get('/beta', (req, res) => {
    res.sendFile('home/about/beta/index.html', {root: path.join(__dirname, 'public')});
});

/* App */

app.get('/app', (req, res) => {
    res.sendFile('app/index.html', {root: path.join(__dirname, 'public')});
});
app.get('/app/news', (req, res) => {
    res.sendFile('app/news/index.html', {root: path.join(__dirname, 'public')});
});
app.get('/app/messages', (req, res) => {
    res.sendFile('app/messages/index.html', {root: path.join(__dirname, 'public')});
});
app.get('/app/themes', (req, res) => {
    res.sendFile('app/themes/index.html', {root: path.join(__dirname, 'public')});
});
app.get('/app/settings', (req, res) => {
    res.sendFile('app/settings/index.html', {root: path.join(__dirname, 'public')});
});
app.get('/app/users/:user', (req, res) => {
    res.sendFile('app/users/index.html', {root: path.join(__dirname, 'public')});
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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());



app.get('/logout', (req, res) => {
    const { authToken } = req.cookies;
    delete authTokens[authToken];
    res.clearCookie('AuthToken');
    res.redirect('/login');
});
app.get('/signup', (req, res) => {
    res.sendFile('auth/singup.html', {root: path.join(__dirname, 'public')});
});
app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;

    getuser.getUsers(process.env.API_KEY).then((result) => {
        if (result.includes(username)) {
            res.redirect('/login');
        } else {
            updateusers.insertUser(process.env.API_KEY, username, email, hashpassword.hashPassword(password)).then((result) => {
                if (result.status == 200) {
                    hashpassword.authToken().then((result) => {
                        const authToken = result;

                        authTokens[authToken] = username;
                        res.cookie('AuthToken', authToken);
                        res.redirect('/app');
                    })
                } else {
                    res.redirect('/signup');
                }
            })
        }
    })
});

app.get('/login', (req, res) => {
    res.sendFile('auth/login.html', {root: path.join(__dirname, 'public')});
});
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    getuser.getUser(process.env.API_KEY, username).then((result) => {
        if (result.status == 200) {
            if (result.data.password == hashpassword.hashPassword(password)) {
                hashpassword.authToken().then((result) => {
                    const authToken = result;

                    authTokens[authToken] = username;
                    res.cookie('AuthToken', authToken);
                    res.redirect('/app');
                })
            } else {
                res.redirect('/login');
            }
        } else {   
            res.redirect('/login');
        }
    })
});

app.listen(process.env.PORT || 3000 , () => console.log('Server started on port 3000: http://localhost:3000'));