const express=require('express');
const {graphqlHTTP} = require("express-graphql");
require('dotenv').config()
const colors=require("colors");
const port=process.env.PORT || 5000;
const schema = require('./schema/schema')
const connectDB = require('./config/db');
const app=express();

//Connection to mongoDB
connectDB();


app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:process.env.NODE_ENV==='development',

}));



app.listen(port,console.log(`Server running on port ${port}`))
