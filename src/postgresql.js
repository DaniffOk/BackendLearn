require('dotenv').config() 
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'backendlearn',
  password: process.env.DBPASS,
  port: 5432,
});

module.exports = pool