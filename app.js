require('dotenv').config();
const express = require('express');
const app = express()

// routes
console.log("=================1=============");
const userRouter = require('./api/users/user.router');
console.log("=================2=============");

app.use(express.json())

app.use("/api/v1/users", userRouter)

app.listen(process.env.APP_PORT || 3000, ()=>{
    console.log("Server up & running");
})
