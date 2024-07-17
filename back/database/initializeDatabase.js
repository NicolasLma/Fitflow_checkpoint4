const fs = require("fs");
const path = require("path");
const pool = require("./db-connection");


const initializeDatabase = async () => {
  try {
    const sqlPath = path.join(__dirname, "datas.sql");
    const sql = fs.readFileSync(sqlPath, "utf-8");

    const queries = sql
      .split(";")
      .map((query) => query.trim())
      .filter((query) => query.length);
    for (const query of queries) {
      await pool.query(query);
    }
    console.log("Database initialize sucessfully");
  } catch (error) {
    console.error("Error initializing database,", error);
  }
};

module.exports = { initializeDatabase };
