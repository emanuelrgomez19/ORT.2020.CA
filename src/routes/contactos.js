const express = require('express');
const router = express.Router();
const Contactos = require('../model/contactos');


router.get('/contactos', async (req, res) => {
  const contactos = await Contactos.find();
  res.render('contactos/contactos', {
      contactos
  });
});

router.post('/addContacto', async (req, res, next) => {
  const contactos = new Contactos(req.body);
  await contactos.save();
  res.redirect('/contactos')
});

router.get('/eliminar/:id', async (req,res)=>{
  const {id} = req.params
  await Contactos.remove({_id:id});
  res.redirect('/contactos')
});

router.get('/editar/:id',async(req,res)=>{
  const {id} = req.params
 const contactos = await Contactos.findById({_id:id});
  res.render('contactos/contactos_edit',{
    contactos
  });

});


router.post('/editar/:id', async (req, res, next) => {
  const { id } = req.params;
  await Contactos.update({_id: id}, req.body);
  res.redirect('/contactos');
});


router.get('/agregarRevista/:id',async(req,res)=>{
  const {id} = req.params
  const contactos = await Contactos.findById({_id:id});
   res.render('contactos/contactos_agregarRevista',{
     contactos
   });

});


router.post('/agregarRevistas/:id',async(req,res)=>{
  const {id} = req.params
  const contactos = await Contactos.findById({_id:id});
  arrayRevistas = contactos.revistas
  arrayRevistas.push(req.body)
  contactos.revistas = arrayRevistas
  await Contactos.update({_id: id}, contactos);
  res.send("SE AGREGO REVISTA");

});




module.exports = router;
