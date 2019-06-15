const mongoose = require('mongoose');

// Team Schema
const TeamSchema = mongoose.Schema({

  teamname: {
    type: String,
    required: true
  },
  members: {
    type: [String],
    required: true
  },
  createdby: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Team', TeamSchema);