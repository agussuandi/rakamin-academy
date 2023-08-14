const pool = require('../../../../../db/database')

const FilmController = {
    async index(req, res) {
        pool.query('select * from film', (error, results) => {
            if (error) return res.status(500).json({message: 'Something went wrong!'})
            return res.json(results.rows)
        })
    },
    async show(req, res) {
        const { id } = req.params
        pool.query(`select * from film where film_id = ${id}`, (error, results) => {
            if (error) return res.status(500).json({message: 'Something went wrong!'})
            return res.json(results.rows)
        })
    }
}

module.exports = FilmController