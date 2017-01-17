const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let quizSchema = new Schema({
  category: String,
  name: String,
  questions: Array
}, {collection: 'quizes'});

let Quizes = mongoose.model('Quizes', quizSchema);

module.exports = Quizes;