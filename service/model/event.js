const mongoose = require('mongoose');

// Event Schema
const EventSchema = mongoose.Schema({
  teamID: {
    type: Number,
    required: true
  },
  creationtime: {
    type: String,
    required: false
  },
  createdby: {
    type: String,
    required: false
  },//refferning to userid in user

  content: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: false
  },
  required: {
    type: [String],
    required: false
  },
  optional: {
    type: [String],
    required: false
  },
  actions: {
    type: [String],
    required: false
  }

});

module.exports = mongoose.model('Event', EventSchema);