const pool = require('../../../../../db/database')

const CategoryController = {
    async index(req, res) {
        pool.query('select * from category', (error, results) => {
            if (error) return res.status(500).json({message: 'Something went wrong!'})
            return res.json(results.rows)
        })
    },
    async show(req, res) {
        const { id } = req.params
        pool.query(`
            select film.film_id, film.title film_name, category.category_id, category.name category_name
            from film_category
            join film on film_category.film_id = film.film_id
            join category on film_category.category_id = category.category_id
            order by film_category.category_id
        `, (error, results) => {
            if (error) return res.status(500).json({message: 'Something went wrong!'})
            return res.json(results.rows)
        })
    }
}

module.exports = CategoryController