const express = require("express")
const con = require("./src/db/connect")
const cors = require('cors')
require("dotenv").config()

const HospitalRouter = require("./src/routes/Hospital.route")
const AuthRouter = require("./src/routes/Auth.route")

const app = express()

const PORT = process.env.PORT

app.use(cors())

app.use(express.json())

app.use('/api/v1/hospitals', HospitalRouter)
app.use('/api/v1/auth', AuthRouter)

app.listen(PORT,()=>{
    console.log("Server Running on port",PORT)
})