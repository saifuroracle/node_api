const dotenv = require('dotenv').config();
const express = require('express');
const app = express()

// routes
const userRouter = require('./api/users/user.router');

app.use("/api/v/users", userRouter)

app.listen(process.env.APP_PORT || 3000, ()=>{
    console.log("Server up & running");
})
