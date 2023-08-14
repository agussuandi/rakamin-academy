const jwt = require('jsonwebtoken')
const pool = require('../../../../../config/database')

const LoginController = {
    async login(req, res) {
        const { email, password } = req.body
        try {
            pool.query('select id, email, gender, role from users where email = $1 and password = $2', [email, password], (error, results) => {
                if (error) return res.status(401).json({message: 'Something went wrong!'})
                return res.json({
                    auth: true,
                    data: results.rows[0],
                    accessToken: `Bearer ${jwt.sign(results.rows[0], 'SECRET@2023', {expiresIn: 86400})}`
                })
            })
        } catch (error) {
            return res.status(401).send({
                message: 'Invalid username or password'
            })
        }
    }
}

module.exports = LoginController