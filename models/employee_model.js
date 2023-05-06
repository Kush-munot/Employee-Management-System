const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    id:{
        type:Number
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    dateOfJoining:{
        type:String,
    },
})

module.exports = mongoose.model('Employee', employeeSchema)