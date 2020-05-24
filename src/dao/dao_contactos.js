const modelContactos = require('../model/contactos')

function buscarContacto(id){
    return modelContactos.findById(id);

}

function listarContactos(){
    return modelContactos.find();
}

async function actualizarContacto(id,dato){
    await modelContactos.update({_id:id},dato)
}

function guardarContacto(dato){
    var contacto= new modelContactos(dato) 
    contacto.save();
}

async function  borrarContacto(id){
  await  modelContactos.remove({_id:id});

}

module.exports = {
    buscarContacto,
    listarContactos,
    actualizarContacto,
    guardarContacto,
    borrarContacto
};
