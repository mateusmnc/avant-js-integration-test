let dbname = 'mydb';
let url = `mongodb://localhost/${dbname}`;

// Use a local test database for integration tests
if (process.env.NODE_ENV === 'test')
  url += 'mongodb://127.0.0.1/mydb_test';

module.exports = {
  url: url
}