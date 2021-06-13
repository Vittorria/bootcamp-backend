// Here we initialize connection to DB
// Load config
console.log("lib/db/conf loaded");
const { Client } = require('pg');

var env = require('../configs/env');

// select typname, oid, typarray from pg_type where typname = 'date' order by oid;
var types = require('pg').types;

var DATE_OID = 1082;

types.setTypeParser(DATE_OID, 'text', (text) => text);

const client = new Client({
    user: env.DB_USER,
    host: env.DB_HOST,
    database: env.DB_NAME,
    password: env.DB_PASSWORD,
    port: env.DB_PORT,
});
client.connect();

module.exports = client;
