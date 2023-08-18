const express = require('express')

const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const server = require('http').createServer(app)

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const api = require('./routes/api')

app.use('/api/v1', api)

server.listen(3000, () => {
    console.log(`Server running on port 3333 🚀`)
})