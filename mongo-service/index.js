"use strict"
//const { promiseReduce } = require('@graphql-tools/utils');
const mongoose = require('mongoose');
const dotEnv = require('dotenv')
dotEnv.config()
let instance = null;
class MongoService {
    static getInstance(){
        if(!instance) {
            instance = new MongoService();
        }
        return instance;
    }
    async connect(){
        try{
            await mongoose.set('strictQuery', true);
            console.log("process.env.MONGO_URI",process.env.MONGO_URI)
            await mongoose.connect(process.env.MONGO_URI,
                // process.env.MONGO_URI,
            { 
                // useNewUrlParser: true,
                // useUnifiedTopology: true,
                bufferCommands: false,
                //connectionTimeoutms: 200000000,
                // keepAlive: true,
                socketTimeoutMS: 45000,
                //poolSize: 1,

            }
        );
        return Promise.resolve();
        }catch(error){
            console.log("error",error.message)
            return Promise.reject(error.message)
    
        }

    }

}

module.exports = MongoService;