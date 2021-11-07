const dotenv = require('dotenv').config();
const express = require('express');
const app = express()

app.get("/api", (req, res)=>{
    res.json({
        success: 1,
        message: "this is a message"
    })
})

app.listen(process.env.APP_PORT || 3000, ()=>{
    console.log("Server up & running");
})
