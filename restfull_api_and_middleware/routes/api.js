const express = require('express')
const router = express.Router()

const MovieController = require('../app/http/controllers/api/v1/MovieController')

router.get('/movies', MovieController.index)
router.post('/movies', MovieController.store)
router.get('/movies/:id', MovieController.show)
router.put('/movies/:id', MovieController.update)
router.delete('/movies/:id', MovieController.destroy)

module.exports = router