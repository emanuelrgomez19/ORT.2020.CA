const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RevistaSchema = Schema({
  nombre: String,
  codigo: String,
  zona: Number,
  description: String,
  status: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('revistas', RevistaSchema);
