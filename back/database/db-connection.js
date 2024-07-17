// Charger les variables d'environnement depuis le fichier .env
require('dotenv').config();
// ce fichier ouvre une nouvelle connexion vers une base de données mysql

const mysql2 = require("mysql2");

const pool = mysql2.createPool ( {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

module.exports = pool;