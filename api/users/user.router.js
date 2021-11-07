const {createUser} = require('./user.controller.js');
const router = require("express").Router()

router.post("/createUser", createUser)

module.exports = router