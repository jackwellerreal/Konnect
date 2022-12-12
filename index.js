const express = require('express');
const axios = require('axios');
const app = express();
const path = require('path');
require('dotenv').config()

app.use(express.static(__dirname + '/public'));

/* Home */

app.get('/', (req, res) => {res.sendFile('home/index.html', {root: path.join(__dirname, 'public')});});
app.get('/about', (req, res) => {res.sendFile('home/about/index.html', {root: path.join(__dirname, 'public')});});
app.get('/about/press', (req, res) => {res.sendFile('home/about/press/index.html', {root: path.join(__dirname, 'public')});});
app.get('/about/branding', (req, res) => {res.sendFile('home/about/branding/index.html', {root: path.join(__dirname, 'public')});});
app.get('/about/acknowledgements', (req, res) => {res.sendFile('home/about/acknowledgements/index.html', {root: path.join(__dirname, 'public')});});
app.get('/support', (req, res) => {res.sendFile('home/support/index.html', {root: path.join(__dirname, 'public')});});
app.get('/beta', (req, res) => {res.sendFile('home/about/beta/index.html', {root: path.join(__dirname, 'public')});});

/*

App

app.get('/app', (req, res) => {res.sendFile('app/index.html', {root: path.join(__dirname, 'public')});});
app.get('/app/news', (req, res) => {res.sendFile('app/news/index.html', {root: path.join(__dirname, 'public')});});
app.get('/app/messages', (req, res) => {res.sendFile('app/messages/index.html', {root: path.join(__dirname, 'public')});});
app.get('/app/themes', (req, res) => {res.sendFile('app/themes/index.html', {root: path.join(__dirname, 'public')});});
app.get('/app/settings', (req, res) => {res.sendFile('app/settings/index.html', {root: path.join(__dirname, 'public')});});

Auth

app.get('/login', (req, res) => {res.sendFile('auth/login.html', {root: path.join(__dirname, 'public')});});
app.get('/signup', (req, res) => {res.sendFile('auth/signup.html', {root: path.join(__dirname, 'public')});});

*/

app.listen(process.env.PORT || 3000 , () => console.log('Server started on port 3000: http://localhost:3000'));
