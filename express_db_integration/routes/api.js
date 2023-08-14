const express = require('express')
const router = express.Router()

const FilmController = require('../app/http/controllers/api/v1/FilmController')
const CategoryController = require('../app/http/controllers/api/v1/CategoryController')

router.get('/films', FilmController.index)
router.get('/films/:id', FilmController.show)

router.get('/categories', CategoryController.index)
router.get('/categories/:id', CategoryController.show)

module.exports = router