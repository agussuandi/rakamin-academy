const express = require('express')
const router = express.Router()

const HomeController = require('../app/http/controllers/HomeController')

router.get('/', HomeController.index)
router.post('/', HomeController.store)

module.exports = router