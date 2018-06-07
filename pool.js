const Pool = require('pg').Pool;

let pool = new Pool({
  host: 'localhost',
  database: 'wlaurance'
});

function query(sql, cb) {
  pool.connect((err, client, done) => {
    if (err) {
      console.error(err);
      return cb(err);
    }
    client.query(sql, (err, res) => {
      done();
      // let client handle err + res
      cb(err, res);
    });
  });
}

module.exports = query;
