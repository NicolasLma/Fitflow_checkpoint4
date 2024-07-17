// ce fichier ouvre une nouvelle connexion vers une base de données mysql

const mysql2 = require("mysql2");

const pool = mysql2.createPool ( {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
});

module.exports = pool;