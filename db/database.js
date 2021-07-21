const { Pool } = require('pg');
require("dotenv").config();

// const devConfig = {
//     user: process.env.PG_USER,
//     password: process.env.PG_PASSWORD,
//     host: process.env.PG_HOST,
//     database: process.env.PG_DATABASE,
//     port: process.env.PG_PORT,
// };
const devConfig = {
    connectionString: process.env.DB_URL,
};

const proConfig = {
    connectionString: process.env.DATABASE_URL, // defined during deployment
};

const pool = new Pool(
    process.env.NODE_ENV === "production" ? proConfig : devConfig
);

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback);
    },
};