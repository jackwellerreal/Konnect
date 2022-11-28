const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.static('public'))

app.get('/', (req, res) => {res.sendFile('index.html', {root: path.join(__dirname, 'public')});});
app.get('/news', (req, res) => {res.sendFile('news/index.html', {root: path.join(__dirname, 'public')});});
app.get('/messages', (req, res) => {res.sendFile('messages/index.html', {root: path.join(__dirname, 'public')});});
app.get('/topaz', (req, res) => {res.sendFile('topaz/index.html', {root: path.join(__dirname, 'public')});});
app.get('/settings', (req, res) => {res.sendFile('settings/index.html', {root: path.join(__dirname, 'public')});});
app.get('/login', (req, res) => {res.sendFile('auth/login.html', {root: path.join(__dirname, 'public')});});
app.get('/signup', (req, res) => {res.sendFile('auth/signup.html', {root: path.join(__dirname, 'public')});});

fs.readdir("./api/", (err, files) => {
    files.forEach(file => {
        app.get(`/api/${file}`, (req, res) => {res.sendFile(`api/${file}`, {root: path.join(__dirname, 'api')});});
    });
});

app.listen(process.env.PORT || 3000);
module.exports = app;