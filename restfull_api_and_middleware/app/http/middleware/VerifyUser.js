const jwt = require('jsonwebtoken')
const pool = require('../../../config/database')

const VerifyUser = (req, res, next) => {
    try {
        const { authorization } = req.headers
        const arrAuthorization = authorization.split(' ')

        if (arrAuthorization.length !== 2) return res.status(403).send({message: 'Error', errors: 'No token provided'})

        jwt.verify(arrAuthorization[1], 'SECRET@2023', (err, decoded) => {
            if (err) return res.status(500).send({message: 'Error', errors: err})
            req.email = decoded.email
            next()
        })
    } catch (error) {
        return res.status(500).send({message: 'Error', errors: error.message})
    }
}
  
module.exports = VerifyUser