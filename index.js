const express = require('express');
const app = express();
const path = require('path');
const users = require('./api/getuser.js');

app.use(express.static('public'))

app.get('/', (req, res) => {res.sendFile('index.html', {root: path.join(__dirname, 'public')});});
app.get('/news', (req, res) => {res.sendFile('news/index.html', {root: path.join(__dirname, 'public')});});
app.get('/messages', (req, res) => {res.sendFile('messages/index.html', {root: path.join(__dirname, 'public')});});
app.get('/topaz', (req, res) => {res.sendFile('topaz/index.html', {root: path.join(__dirname, 'public')});});
app.get('/settings', (req, res) => {res.sendFile('settings/index.html', {root: path.join(__dirname, 'public')});});
app.get('/login', (req, res) => {res.sendFile('auth/login.html', {root: path.join(__dirname, 'public')});});
app.get('/signup', (req, res) => {res.sendFile('auth/signup.html', {root: path.join(__dirname, 'public')});});

for (let i = 0; i < users.length; i++) {
    app.get('/' + users[i].username, (req, res) => {res.sendFile('user/index.html', {root: path.join(__dirname, 'public')});});
}

app.listen(process.env.PORT || 3000);
module.exports = app;