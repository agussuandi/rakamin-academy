const express = require("express")
const router = express.Router()

const movies = require("../util/data")

/**
 * @swagger
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       required:
 *         - title
 *         - genres
 *         - year
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the movie
 *         genres:
 *           type: string
 *           description: The genres of your movie
 *         year:
 *           type: string
 *           description: The movie year
 *       example:
 *         id: 1,
 *         title: Reckless,
 *         genres: Comedy|Drama|Romance,
 *         year: 2001
 */

/**
 * @swagger
 * tags:
 *   name: movies
 *   description: The movies managing API
 * /movies:
 *   get:
 *     summary: Lists all the movies
 *     tags: [movies]
 *     responses:
 *       200:
 *         description: The list of the movies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 *   post:
 *     summary: Create a new movie
 *     tags: [movies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       200:
 *         description: The created movie.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       500:
 *         description: Some server error
 * /movies/{id}:
 *   get:
 *     summary: Get the movie by id
 *     tags: [movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The movie id
 *     responses:
 *       200:
 *         description: The movie response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       404:
 *         description: The movie was not found
 *   put:
 *    summary: Update the movie by the id
 *    tags: [movies]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The movie id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Movie'
 *    responses:
 *      200:
 *        description: The movie was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Movie'
 *      404:
 *        description: The movie was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the movie by id
 *     tags: [movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The movie id
 *
 *     responses:
 *       200:
 *         description: The movie was deleted
 *       404:
 *         description: The movie was not found
 */

router.get("/", function (req, res) {
  res.status(200).json(movies);
});

router.get("/:id", function (req, res) {
  let movie = movies.find(function (item) {
    return item.id == req.params.id;
  });

  movie ? res.status(200).json(movie) : res.sendStatus(404);
});

router.post("/", function (req, res) {
  const { title, genres, year } = req.body;

  let movie = {
    id: movies.length + 1,
    title: title,
    genres: genres,
    year: year
  };

  movies.push(movie);

  res.status(201).json(movie);
});

router.put("/:id", function (req, res) {
  let movie = movies.find(function (item) {
    return item.id == req.params.id;
  });

  if (movie) {
    const { title, genres, year } = req.body;

    let updated = {
      id: movie.id,
      title: title !== undefined ? title : movie.title,
      genres: genres !== undefined ? genres : movie.genres,
      year: year !== undefined ? year : movie.year
    };

    movies.splice(movies.indexOf(movie), 1, updated);

    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

router.delete("/:id", function (req, res) {
  let movie = movies.find(function (item) {
    return item.id == req.params.id;
  });

  if (movie) {
    movies.splice(movies.indexOf(movie), 1);
  } else {
    return res.sendStatus(404);
  }

  res.sendStatus(204);
});

module.exports = router;