const express = require('express');
const axios = require('axios');
const app = express();
const path = require('path');
require('dotenv').config()

// Pages

app.use(express.static('public'))

app.get('/app', (req, res) => {res.sendFile('app/index.html', {root: path.join(__dirname, 'public')});});
app.get('/app/news', (req, res) => {res.sendFile('app/news/index.html', {root: path.join(__dirname, 'public')});});
app.get('/app/messages', (req, res) => {res.sendFile('app/messages/index.html', {root: path.join(__dirname, 'public')});});
app.get('/app/themes', (req, res) => {res.sendFile('app/themes/index.html', {root: path.join(__dirname, 'public')});});
app.get('/app/settings', (req, res) => {res.sendFile('app/settings/index.html', {root: path.join(__dirname, 'public')});});
app.get('/login', (req, res) => {res.sendFile('auth/login.html', {root: path.join(__dirname, 'public')});});
app.get('/signup', (req, res) => {res.sendFile('auth/signup.html', {root: path.join(__dirname, 'public')});});

app.listen(process.env.PORT || 3000 , () => console.log('Server started on port 3000: http://localhost:3000'));
