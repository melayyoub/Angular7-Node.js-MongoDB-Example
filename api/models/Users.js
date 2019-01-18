const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for users
let Users = new Schema({
  username: {
    type: String
  },
  password: {
    type: String
  }
});

module.exports = mongoose.model('Users', Users);