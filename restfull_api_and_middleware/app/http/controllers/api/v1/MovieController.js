const pool = require('../../../../../config/database')

const MovieController = {
    async index(req, res) {
        pool.query('select * from movies', (error, results) => {
            if (error) return res.status(500).json({message: 'Something went wrong!'})
            return res.json(results.rows)
        })
    },
    async store(req, res) {
        const { title, genres, year } = req.body
        pool.query('insert into movies (id, title, genres, year) values ((select max(id) + 1 as id from movies), $1, $2, $3) RETURNING *', [title, genres, year], (error, results) => {
            if (error) return res.status(500).json({message: 'Something went wrong!'})
            return res.json(results.rows[0])
        })
    },
    async show(req, res) {
        const { id } = req.params
        pool.query(`select * from movies where id = ${id}`, (error, results) => {
            if (error) return res.status(500).json({message: 'Something went wrong!'})
            return res.json(results.rows)
        })
    },
    async update(req, res) {
        const { id } = req.params
        const { title, genres, year } = req.body
        pool.query('update movies set title = $1, genres = $2, year = $3 where id = $4', [title, genres, year, id], (error, results) => {
            if (error) return res.status(500).json({message: 'Something went wrong!'})
            return res.json({message: `Movie modified with ID: ${id}`})
        })
    },
    async destroy(req, res) {
        const { id } = req.params
        pool.query('delete from movies where id = $1', [id], (error, results) => {
            if (error) return res.status(500).json({message: 'Something went wrong!'})
            return res.json({message: `Movie deleted with ID: ${id}`})
        })
    }
}

module.exports = MovieController