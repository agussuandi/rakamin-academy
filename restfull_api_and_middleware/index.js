const express = require('express')

const app = express()
const bodyParser = require('body-parser')
const server = require('http').createServer(app)

const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const api = require('./routes/api')

app.use('/api/v1', api)

const options = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "LogRocket Express API with Swagger",
            version: "0.1.0",
            description: "This is a simple CRUD API application made with Express and documented with Swagger",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "LogRocket",
                url: "https://logrocket.com",
                email: "info@email.com",
            },
        },
        servers: [
            {
                url: "http://localhost:3000/api/v1",
            },
        ],
    },
    apis: ["./routes/*.js"],
}
  
const specs = swaggerJsdoc(options)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

server.listen(3000, () => {
    console.log(`Server running on port 3000 🚀`)
})