const express = require('express')
const router = express.Router()

const VerifyUser = require('../app/http/middleware/VerifyUser')

const LoginController = require('../app/http/controllers/api/v1/LoginController')
const MovieController = require('../app/http/controllers/api/v1/MovieController')

router.post('/auth/login', LoginController.login)

router.get('/movies', VerifyUser, MovieController.index)
router.post('/movies', VerifyUser, MovieController.store)
router.get('/movies/:id', VerifyUser, MovieController.show)
router.put('/movies/:id', VerifyUser, MovieController.update)
router.delete('/movies/:id', VerifyUser, MovieController.destroy)

module.exports = router