//! Import Express

const express = require("express")

//! import env

require('dotenv').config()

//! Import DB

require ('./db/connection')

//! Server

const server = express()

//! Import CORS

const cors = require ('cors')

//! Import Router

const router = require("./routes/router")

//! Connect to front end

server.use(cors())
server.use(express.json())
server.use(router)

//! Setting Port

const port = 4000 || process.env.port

//! Server connection

server.listen(port, () => {
    console.log(`tasker Server started at port ${port}`);
})