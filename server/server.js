const express = require('express')
const apiRouter = require('./routes')

const app = express()

app.use(express.json())

app.use('/api/v1/users', apiRouter)

app.listen(process.env.PORT || '3000' , () => {
    console.log(`server running on port ${process.env.PORT || '3000'}`);
})
