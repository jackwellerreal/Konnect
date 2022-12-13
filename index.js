const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
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

app.listen(process.env.PORT || 3000 , () => console.log('Server started on port 3000: http://localhost:3000'));
