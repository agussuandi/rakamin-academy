const pool = require('../../../../../db/database')

const TodoController = {
    async index(req, res) {
        pool.query('select * from todos', (error, results) => {
            if (error) return res.status(500).json({message: 'Something went wrong!'})
            return res.json(results.rows)
        })
    },
    async store(req, res) {
        const { name } = req.body
        pool.query('insert into todos (name) values ($1) RETURNING *', [name], (error, results) => {
            if (error) return res.status(500).json({message: 'Something went wrong!'})
            return res.json(results.rows[0])
        })
    },
    async show(req, res) {
        const { id } = req.params
        pool.query(`select * from todos where id = ${id}`, (error, results) => {
            if (error) return res.status(500).json({message: 'Something went wrong!'})
            return res.json(results.rows[0])
        })
    },
    async update(req, res) {
        const { id } = req.params
        const { name } = req.body
        pool.query('update todos set name = $1, updated_at = $2 where id = $3', [name, new Date(), id], (error, results) => {
            if (error) return res.status(500).json({message: 'Something went wrong!'})
            return res.json({message: `Todo modified with ID: ${id}`})
        })
    },
    async destroy(req, res) {
        const { id } = req.params
        pool.query('delete from todos where id = $1', [id], (error, results) => {
            if (error) return res.status(500).json({message: 'Something went wrong!'})
            return res.json({message: `Todo deleted with ID: ${id}`})
        })
    }
}

module.exports = TodoController