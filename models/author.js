const mongoose = require('mongoose');

const authorScheema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Author', authorScheema);
