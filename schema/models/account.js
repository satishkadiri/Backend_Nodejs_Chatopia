const mongoose = require('mongoose')
const schema = mongoose.Schema

const accountSchema = new schema({
    firstName : {
        type:String
    },
    lastName : {
        type:String
    },
    email : {
        type:String,
        lowercase:true
    },
    phoneNumber:{
        type:String
    },
    password : {
        type:String
    },
    createdAt:{
        type:Date
    },
    updatedAt:{
        type:String
    }
})

const account = mongoose.model('account',accountSchema)
module.exports = account