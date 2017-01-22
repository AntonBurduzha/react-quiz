const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userDataSchema = new Schema({
  login: {type: String, required: true},
  password: String,
  mail: String,
  quizResults: Array
}, {collection: 'user-data'});

let UserData = mongoose.model('UserData', userDataSchema);

module.exports = UserData;