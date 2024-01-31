const express = require('express')
const connectDB = require('./configuration/Configuration')
const userRouter = require('./Router/Router')
const app = express()
const port = 5000
app.use(express.json())
connectDB()
app.use('/user',userRouter)
app.listen(port,console.log('server is running'))
