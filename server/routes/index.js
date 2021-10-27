const express = require('express')
const router = express.Router()
const db = require('../db');

router.get('/', async (req, res, next)=>{
    // res.json({"id": 1, "name": "John Doe"})
    try {
        let results = await db.all()
        res.json(results)
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
})

module.exports = router