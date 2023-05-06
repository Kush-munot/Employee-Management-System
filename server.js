const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const url = 'mongodb://127.0.0.1:27017/'
const app = express()
mongoose.connect(url)
app.use(cors())

const con = mongoose.connection

con.on('open', (req, res) => {
    console.log("Connected to the DB");
})

app.use(express.json())

const employeeRouter = require('./routes/employee')
app.use('/employees', employeeRouter)

app.listen(8090, () => {
    console.log("Server Started !!");
})