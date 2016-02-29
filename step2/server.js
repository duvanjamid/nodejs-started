var express = require('express');

// Crear aplicación del servidor.
var app = express();

// Puerto donde va a correr el servidor.
var port = 8000;

// Habilitar que el servidor reciba datos por peticiones HTTP tipo POST y PUT.


// Conseguir la lista de todos los contactos.
app.post('/', function (req, res) {

    res.status(200).render('index');

});

// Definir la carpeta 'public' como pública.
app.use(express.static(__dirname +'/public'));

// Iniciar el servidor.
app.listen(port, function (err) {
    if (err) {
        throw err;
    }
    console.log('Servidor corriendo en http://127.0.0.1:'+ port);
});
