- npm install --save-dev nodemon
- npm install express
- npm install pg
- npm install pg-hstore
- npm install sequelize
- npm install -g sequelize-cli

- npx sequelize-cli migration:create --name alter_actors_add_new_fields

- npx sequelize db:seed:all
- npx sequelize-cli db:migrate

API's
------------------------------------
- GET localhost:3000/api/v1/movies
- POST localhost:3000/api/v1/movies
- GET localhost:3000/api/v1/movies/:id
- PUT localhost:3000/api/v1/movies/:id
- DELETE localhost:3000/api/v1/movies/:id