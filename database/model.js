const { Pool } = require('pg');

const PG_URI = 'postgres://uukfmpcg:aaPysolXzgSV_yRyvtuH5iPpHFMNuZmN@raja.db.elephantsql.com/uukfmpcg';

const pool = new Pool({
    connectionString: PG_URI
  });


module.exports = {
    query: (text, params, callback) => {
      // console.log('executed query', text);
        return pool.query(text, params, callback);
    }
  };