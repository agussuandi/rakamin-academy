const express = require('express')

const app = express()
const server = require('http').createServer(app)

const api = require('./routes/api')

app.use('/api/v1', api)

server.listen(3000, () => {
    console.log(`Server running on port 3000 🚀`)
})