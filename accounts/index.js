// const {apolloServer,gql, ApolloError} = require("apollo-server");
const { ApolloServer, gql } = require("apollo-server");
const resolvers = require("./resolvers");
// const resolvers = require("./resolvers")
const dotEnv = require("dotenv");

dotEnv.config()
const API_PORT= process.env.PORT

const typeDefs = gql`
    type Account{
        firstName: String
        lastName: String
        email: String
        password: String
        phoneNUmber: Int
    }
    input CreateAccountInput{
        firstName: String
        lastName: String
        email: String
        password: String
        phoneNumber: String
    }
    input UpdateAccountInput{
        firstName: String
        lastName: String
        email: String
        password: String
        phoneNumber: String
    }
    type Mutation {
        createAccount(input:CreateAccountInput):Account!
        updateAccount(email:String!,input:UpdateAccountInput):Account!
        
    }
    type Query {
       getUser(email:String!):Account 
       loginUser(email:String!,password:String!):Boolean
    }

    
`;
const accountResolvers = {
    Query:{
        getUser:async(parent,{email},context) => resolvers.queries.getUser({email},context),
        loginUser:async(parent,{email,password},context) => resolvers.queries.loginUser({email,password},context)
        
    },
    Mutation:{
        createAccount:async(parent,{input},context) => resolvers.mutations.createAccount({input},context),
        updateAccount:async(parent,{email,input},context) => resolvers.mutations.updateAccount({email,input},context)
    
    },
       
}

const server = new ApolloServer({typeDefs,resolvers:accountResolvers});
// server.listen({port:API_PORT})
server.listen({port:API_PORT || 4000}).then(({url}) =>{
    console.log(`listening port is ${url}`)
    //.catch((error) => {console.log(error)})
})