const {Account} = require('../../../../schema/models');
const MongoService = require('../../../../mongo-service')
const bcrypt = require('bcryptjs')
module.exports = async({input},context)=>{
    try{
        console.log("a")
        await MongoService.getInstance().connect()
        const getUser = await Account.findOne({email:input.email,phoneNumber:input.phoneNumber})
        if(getUser){
            throw new Error("user already exist")
        }
        const hashedPassword = await bcrypt.hash(input.password,10)

        input.password = hashedPassword
        const createAccount = await Account.create(input)
        console.log(createAccount)
        return createAccount
    }catch(error){
        console.error("error",error)
        throw error
    }
    
}