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
- localhost:3000/api/v1/films
- localhost:3000/api/v1/films/:id

- localhost:3000/api/v1/categories
- localhost:3000/api/v1/categories/:id