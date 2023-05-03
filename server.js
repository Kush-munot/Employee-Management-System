const express = require('express');
const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/'
const app = express()
mongoose.connect(url)

const con = mongoose.connection

con.on('open', (req, res) => {
    console.log("Connected to the DB");
})