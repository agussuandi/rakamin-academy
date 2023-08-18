const express = require('express')
const router = express.Router()

const TodoController = require('../app/http/controllers/api/v1/TodoController')

router.get('/todos', TodoController.index)
router.get('/todos/:id', TodoController.show)
router.post('/todos', TodoController.store)
router.put('/todos/:id', TodoController.update)
router.delete('/todos/:id', TodoController.destroy)

module.exports = router