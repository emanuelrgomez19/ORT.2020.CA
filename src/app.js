const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();


// connection to db
mongoose.connect('mongodb://localhost/crud-mongo')
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));

// importing routes
const indexRoutes = require('./routes/index');
const contactosRoutes = require('./routes/contactos');
const revistasRoutes = require('./routes/revistas');
const suscripcionesRoutes = require('./routes/suscripciones');


// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// mmiddlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json());

// routes
app.use('/', indexRoutes);
app.use('/', contactosRoutes);
app.use('/', revistasRoutes);
app.use('/', suscripcionesRoutes);

//Escuchando puerto 
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});

