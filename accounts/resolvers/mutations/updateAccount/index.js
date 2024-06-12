"use strict"
const {Account} = require("../../../../schema/models")
const MongoService = require("../../../../mongo-service")

module.exports = async({email,input})=>{

    await MongoService.getInstance().connect()

    console.log("input",input)
    const getUser = await Account.findOne({email:email})
    console.log("getUser",getUser)
    if(!getUser){
        throw new Error(" user Does't exist")
    }

    const updateUser = await Account.findOneAndUpdate({_id:getUser._id},input,{new:true})
    console.log("updateUser",updateUser)
    return updateUser
}   