const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'rakamin_academy',
    password: 'melawai',
    port: 5432
})

module.exports = pool