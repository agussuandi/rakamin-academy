- npm install --save-dev nodemon
- npm install express
- npm install pg
- npm install pg-hstore
- npm install sequelize
- npm install -g sequelize-cli

- npx sequelize-cli migration:create --name create-todos
- npx sequelize-cli db:migrate

- npx sequelize seed:generate --name todos
- npx sequelize db:seed:all

API's
------------------------------------
- GET localhost:3000/api/v1/todos
- POST localhost:3000/api/v1/todos
- GET localhost:3000/api/v1/todos/:id
- PUT localhost:3000/api/v1/todos/:id
- DELETE localhost:3000/api/v1/todos/:id