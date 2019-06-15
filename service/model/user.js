const mongoose = require('mongoose');

// User Schema
const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: false
  },
  department: {
    type: String,
    required: false
  },
  designation: {
    type: String,
    required: false
  },
  gender: {
    type: String,
    required: false
  },
  booldgroup: {
    type: String,
    required: false
  },
  birthdate: {
    type: String,
    required: false
  },
  contact: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', UserSchema);