const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SuscripcionesSchema = Schema({
  title: String,
  description: String,
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('suscripciones', SuscripcionesSchema);
