const { Client } = require('pg');  //import client class from pg node library

const connectionString = process.env.DATABASE_URL || 'https://localhost:5432/gamestore';

const client = new Client({
  connectionString,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
});

module.exports = client;