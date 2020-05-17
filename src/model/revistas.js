const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RevistaSchema = Schema({
  id:Number,
  Name: String,
  Zone: String,
  AnioMes: Number,
  description: String,
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('revistas', RevistaSchema);
