const express = require('express')

const server = express()

server.use(express.json())

require('./routes/server.routes.js')(server)

module.exports = server