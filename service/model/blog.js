const mongoose = require('mongoose');

// Blog Schema
const BlogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: false
  },
  creationDate: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  like: {
    type: String,
    required: false
  },
  dislike: {
    type: String,
    required: false
  },
  teamID: {
    type: Number,
    required: true
  },
  userID: {
    type: Number,
    required: false
  }
});

module.exports = mongoose.model('Blog', BlogSchema);