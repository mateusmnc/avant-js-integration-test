const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
  title: {
    type: String
  },
  year: {
    type: Number
  },
  lengthMinutes: {
    type: Number
  },
  insertionDate: {
    type: Date
  }
});

module.exports = mongoose.model('Movie', movieSchema);