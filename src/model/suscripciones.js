const mongoose = require('mongoose');
const revista = require('../model/revistas')
const contactos = require('../model/contactos')

const Schema = mongoose.Schema;
const revistaSchema = new Schema;
const contactoSchema = new Schema;

const SuscripcionesSchema = Schema({
  nombre: String,
  contacto: [contactoSchema],
  revista: [revistaSchema],
  status: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('suscripciones', SuscripcionesSchema);
