const {Account} = require('../../../../schema/models')
const MongoService = require('../../../../mongo-service')
const bcrypt = require('bcryptjs')
module.exports = async({email,password})=>{
    try{
        await MongoService.getInstance().connect()
        console.log("email",email)
        console.log("password",password)
        const getUser = await Account.findOne({email});
        console.log("getUser",getUser.password)
        // console.log(await bcrypt.compare(getUser.password,password))
        const comparePassword = await bcrypt.compare(getUser.password,password)
        console.log(!getUser || !comparePassword)
        if(!getUser || !comparePassword){
            console.log("kk")
            return  "Invalid password"
        }
        console.log("aa")
        return true
    }catch(error){
        console.log(error)
        throw new error("login failed")
    }
    
}
      