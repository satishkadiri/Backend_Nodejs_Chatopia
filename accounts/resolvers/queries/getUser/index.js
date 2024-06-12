const MongoService = require('../../../../mongo-service')
const account =require("../../../../schema/models/account")

module.exports = async(email)=>{
    try{
        await MongoService.getInstance().connect()
        console.log("email",email)
        const getUser = await account.findOne(email)
        return getUser
    }catch(error){
        console.error("error",error)
        throw error
    }
    
}