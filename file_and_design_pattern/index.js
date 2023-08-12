const express = require('express')

const app = express()
const path   = require('path')
const server = require('http').createServer(app)
const bodyParser = require('body-parser')

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "resources"))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

const web = require('./routes/web')

app.use('/', web)
app.use('/public', express.static('public'))

server.listen(3000, () => {
    console.log(`Server running on port 3000 🚀`)
})