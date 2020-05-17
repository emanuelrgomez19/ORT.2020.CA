# T6_RestAPI


RestAPI en NodeJS (les sirve para el TP de CA)
- Con autenticación
- Administración de contactos: Listado con filtro (nombre, dni, email) y ABM
- Administración de revistas: Listado con filtro (codigo, nombre, zona) y ABM
- Administración de suscripciones: Listado con filtro (contacto, revista, etc) y ABM
- Administración de ediciones: Listado, ABM y notificación a suscriptores, efectivizar el cobro de la misma y dar aviso de la descarga.

Para probar el API pueden usar Postman o el plugin de Chrome: "Yet Another REST Client"

Front-end
- Pueden usar el framework que ustedes elijan: bootstrap, angular, etc.
- Las bajas son siempre marcas de inactivo (no se eliminan registros)
- La idea es hacer la administración de las suscripciones -todas en formato digital.
Cuando sale un nuevo ejemplar de una revista, deben revisar los contactos que tienen suscripciones activas y notificarles del nuevo ejemplar con un link de descarga del mismo (un link de descarga por suscriptor). Asímismo, generar un reporte de los contactos a los cuales debe cobrarse el ejemplar.
Cuando el suscriptor descarga el ejemplar, se incrementa la cantidad de descargas que se realizó del ejemplar y se permite un máximo 2 descargas.


Particularidades
- El contacto es único (por DNI); puede tener varios domicilios, teléfonos e e-mails (como los contactos de Google) donde indican el tipo de cada uno de ellos (personal, laboral, otro)
- El contacto puede tener sólo una suscripción a una misma revista, pero puede estar suscripto a varias.
- El precio a cobrar corresponde al ejemplar (edicion) y no a la revista
- No hay reseteo para que el suscriptor pueda bajar otra vez el ejemplar en caso de haber excedido el máximo permitido (2 downloads completados exitósamente)
