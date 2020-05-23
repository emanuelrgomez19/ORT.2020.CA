const mongoose = require('mongoose');
const revista = require('../model/revistas')
const Schema = mongoose.Schema;

revistaSchema = revista.schema
const ContactoSchema = Schema({
  nombre: String,
  apellido: String,
  doc: Number,
  mail: String,
  mail2: String,
  celular: Number,
  telefono: Number,
  description: String,
  revistas : [revistaSchema],
  status: {
    type: Boolean,
    default: true
  }
});




module.exports = mongoose.model('contactos', ContactoSchema);
