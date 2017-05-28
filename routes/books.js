const Book = require('../models/book');


let paths = [];

/* Route GET /books */
const getBooks = {
  method: 'GET',
  path: '/books'
};
getBooks.handler = (req, reply) => {
  var result = Book.find()
  reply(result);
};
paths.push(getBooks);

/* Route POST /books */
const addBook = {
  method: 'POST',
  path: '/books'
};
addBook.handler = (req, reply) => {
  var result = Book.insertMany(req.payload)
  reply(result);
};
paths.push(addBook);

module.exports = paths;